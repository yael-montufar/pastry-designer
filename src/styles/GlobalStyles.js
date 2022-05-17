import 'styled-components/macro'
import React from 'react'
import { createGlobalStyle } from 'styled-components'
import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro'
import { RotatingStyles, RippleStyles } from 'styles'

const CustomStyles = createGlobalStyle`
  body {
    ${tw`bg-background`}
  }

  .text-select-none {
    -webkit-user-select: none; /* Safari */        
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+/Edge */
    user-select: none; /* Standard */
  }

  .hidden {
    display: none !important;
  }

  .format-copy {
    position: absolute;
    width: 100%;
    padding: 0;
    text-align: center;
    font-size: .5rem;
    bottom: 6%;
    background-color: ${theme`colors.background` + 'a0'};
  }
`

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
    <RotatingStyles />
    <RippleStyles />
  </>
)

export default GlobalStyles