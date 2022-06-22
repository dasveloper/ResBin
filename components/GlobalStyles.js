import React from "react";
import { createGlobalStyle } from "styled-components";
import tw, { GlobalStyles as BaseStyles } from "twin.macro";

const CustomStyles = createGlobalStyle`
  html {
    ${tw`bg-white text-gray-900 cursor-default leading-none`}
  }
  body {
    ${tw`font-sans text-base antialiased`}
  }
`;

function GlobalStyles() {
  return (
    <>
      <BaseStyles />
      <CustomStyles />
    </>
  );
}

export default GlobalStyles;
