import React from 'react'
import 'styled-components/macro'
import tw, { css } from 'twin.macro'
import { theme } from 'styles'

const DonutHole = ({ donutType, donutFlavor, donutGlazings, donutToppings }) => {
  const addonsIsEmpty = donutGlazings.length <= 0 && donutToppings.length <= 0
  // addonsIsEmpty = [].concat(donutGlazings, donutToppings).length <= 0 //alternate method

  return (
    <div css={styles.root({
      hidden: (!donutType || donutType === "JellyFilledBase") || addonsIsEmpty,
      fill: theme.colors.flavors[donutFlavor ? donutFlavor : 'regular']
    })} />
  )
}

export default DonutHole

const styles = {
  root: ({ hidden, fill }) => [
    hidden && tw`hidden`,

    tw`
    absolute
    rounded rounded-full
    bg-background
    `,

    css`
    z-index: 30;
    aspect-ratio: 1;
    width: 34%; //donut-hole-ratio approximation
    box-shadow: 0px 0px 4px 8px ${fill};
    `,

  ],
}