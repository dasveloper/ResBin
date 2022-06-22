import tw, { styled } from "twin.macro";

const variants = {
  error: tw`text-red-700 bg-red-100`,
  warning: tw`text-yellow-700 bg-yellow-100`,
  info: tw`text-blue-700 bg-blue-100`,
  success: tw`text-green-700 bg-green-100`,
};

const Alert = styled.div.attrs({ role: "alert" })(({ variant = "info" }) => [
  tw`p-4 mb-4 rounded-lg text-sm`,
  variants[variant],
]);

export default Alert;
