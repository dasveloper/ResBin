import tw, { styled } from "twin.macro";

const sizes = {
  xs: tw`p-1.5 text-xs`,
  sm: tw`p-2 text-sm`,
  md: tw`p-2.5 text-sm`,
  lg: tw`p-3 text-base`,
  xl: tw`p-3.5 text-base `,
};

const Input = styled.input(({ size = "md", block, readOnly }) => [
  tw`block font-medium bg-white rounded-md border border-gray-300`,
  sizes[size],
  block && tw`w-full`,
  readOnly && tw`bg-gray-50 focus:outline-none`,
]);

export default Input;
