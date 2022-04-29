import React, { Fragment } from 'react'
import 'styled-components/macro'
import tw, { css } from 'twin.macro'
import { theme } from 'styles'

const DONUT_FLAVORS = [
  "regular",
  "chocolate",
  "strawberry",
]

const DonutFlavorSelection = () => {
  return (
    <div css={styles.root}>
      {DONUT_FLAVORS.map((donutFlavor, index) => {
        return (
          <Fragment key={`${donutFlavor}-${index}`}>
            <div css={[styles.donutFlavorButton(theme.colors.flavors[donutFlavor])]}>{donutFlavor}</div>
            {index !== DONUT_FLAVORS.length - 1 && <span css={tw`mx-2`} />}
          </Fragment>
        )
      })}
    </div>
  )
}

export default DonutFlavorSelection

const styles = {
  root: () => [
    tw`
    w-full h-full
    flex flex-row justify-center items-center
    bg-gray-200
    `
  ],
  donutFlavorButton: (flavor) => [
    tw`
    flex justify-center items-center
    h-10
    w-1/3 //mobile
    sm:w-40 //desktop
    uppercase text-white
    text-sm //mobile
    sm:text-base //desktop
    rounded rounded-lg
    `,

    css`
    background-color: ${flavor};
    `
  ],
}