import 'styled-components/macro'
import React from 'react'
import { createGlobalStyle } from 'styled-components'
import tw, { GlobalStyles as BaseStyles } from 'twin.macro'
import { RotatingStyles } from 'styles'

const CustomStyles = createGlobalStyle`
  body {
    ${tw`bg-background`}
  }
`

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
    <RotatingStyles />
  </>
)

export default GlobalStyles