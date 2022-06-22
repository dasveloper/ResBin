import ky from "ky";

export const validateCaptcha = async (recaptcha) => {
  const res = await ky
    .post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptcha}`
    )
    .json();
  return res.success;
};
