import uniqueId from "../../lib/uniqueId";
import { binSchema } from "../../lib/validators";
import { createBin } from "../../services/bin";
import { validateCaptcha } from "../../services/recaptcha";

export default async function handler(req, res) {
  const { method } = req;
  if (method === "POST") {
    // Validate bin data
    const { success, data, error } = binSchema.safeParse(req.body);
    if (!success) {
      return res.status(422).json({ message: error.issues[0].message });
    }

    // Get bin data
    const { resStatus, resBody, recaptcha } = data;
    const binId = uniqueId();

    // Validate ReCaptcha
    const validCaptcha = await validateCaptcha(recaptcha);
    if (!validCaptcha) {
      return res.status(422).json({ message: "Invalid ReCaptcha" });
    }

    // Create new bin
    const created = await createBin(binId, {
      resStatus,
      resBody,
    });
    if (!created) {
      return res.status(500).json({ message: "Could not create new bin" });
    }

    // Send binId response
    return res.status(200).json({ message: "Bin created successfully", binId });
  }
  return res.status(405).json({ message: `${method} method unsupported` });
}
