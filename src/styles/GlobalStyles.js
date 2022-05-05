import 'styled-components/macro'
import React from 'react'
import { createGlobalStyle } from 'styled-components'
import tw, { GlobalStyles as BaseStyles } from 'twin.macro'
import { RotatingStyles, RippleStyles } from 'styles'
import Frame from 'assets/frame.jpeg'

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
  .frame {
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10em;

    width: 40em;
    height: 40em;
    background-image: url(${Frame});
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover; /* Resize the background image to cover the entire container */
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