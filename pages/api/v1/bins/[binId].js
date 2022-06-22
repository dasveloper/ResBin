import NextCors from "nextjs-cors";
import { getBinById } from "../../../../services/bin";
import rateLimiter from "../../../../lib/rateLimiter";

const limiter = rateLimiter({
  interval: 10 * 1000, // 10 seconds
});

export default async function handler(req, res) {
  await NextCors(req, res, {
    methods: ["GET", "HEAD"],
    origin: "*",
    optionsSuccessStatus: 200,
  });

  const { method } = req;
  if (method === "GET") {
    // Get binId
    const { binId } = req.query;

    // Rate limit bin requests
    const isRateLimited = limiter.check(res, 10, binId); // 10 requests in 10 seconds
    if (isRateLimited) {
      res.setHeader("resBinSuccess", false);
      res.setHeader("resBinMessage", "You have exceeded the rate limit");
      return res.status(429).end();
    }

    // Get bin
    const bin = await getBinById(binId);
    if (!bin) {
      res.setHeader("resBinSuccess", false);
      res.setHeader("resBinMessage", "Could not find bin");
      return res.status(404).end();
    }

    // Set resBin headers
    res.setHeader("resBinSuccess", true);
    res.setHeader("resBinMessage", `Success`);

    // Get bin details
    const { resStatus, resBody } = bin;

    // Set bin status
    res.status(resStatus);

    // Set res type
    res.setHeader("Content-Type", "application/json");

    // Send bin response
    return res.send(resBody);
  }

  res.setHeader("resBinSuccess", false);
  res.setHeader("resBinMessage", `${method} method unsupported`);
  return res.status(405).end();
}
