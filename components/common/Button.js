import tw, { styled } from "twin.macro";

const variants = {
  primary: tw`text-white bg-blue-600 hover:bg-blue-700 focus:ring-blue-300`,
  outline: tw`bg-white border border-gray-300 hover:bg-gray-100 focus:ring-gray-200`,
};

const sizes = {
  xs: tw`px-2 py-1.5 text-xs`,
  sm: tw`px-3 py-2 text-sm`,
  md: tw`px-4 py-2.5 text-sm`,
  lg: tw`px-5 py-3 text-base`,
  xl: tw`px-6 py-3.5 text-base `,
};

const Button = styled.button(({ variant = "primary", size = "md" }) => [
  tw`font-medium rounded-md text-sm focus:(ring-2 outline-none)`,
  variants[variant],
  sizes[size],
]);

export default Button;
