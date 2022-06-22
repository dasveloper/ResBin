import * as z from "zod";

export const binSchema = z.object({
  // Response status must be number 100-600
  resStatus: z
    .number({
      invalid_type_error: "Response status must be a number",
      required_error: "Response status is required",
    })
    .min(100, { message: "Minimum response status is 100" })
    .max(600, { message: "Maximum response status is 600" }),

  // (Optional) Response body must be a string <2000 characters
  resBody: z
    .string({
      invalid_type_error: "Response body must be a string",
    })
    .max(2000, { message: "Response body max length is 2000 characters" })
    .optional(),

  // Recaptcha must be completed
  recaptcha: z.string({
    invalid_type_error: "ReCAPTCHA must be a completed",
    required_error: "ReCAPTCHA is required",
  }),
});
