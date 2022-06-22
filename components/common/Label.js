import tw, { styled } from "twin.macro";

const sizes = {
  sm: tw`text-xs`,
  md: tw`text-sm`,
  lg: tw`text-base`,
};

const Label = styled.label(({ size = "md", hidden }) => [
  tw`block mb-1 font-medium`,
  sizes[size],
  hidden && tw`sr-only`,
]);

export default Label;
