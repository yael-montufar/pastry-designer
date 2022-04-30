import React from 'react'
import 'styled-components/macro'
import tw, { css } from 'twin.macro'
import { svgSelector } from 'helpers'
import { DonutTypes, DonutGlazings } from 'assets'
import { theme } from 'styles'


const Canvas = ({ donutType, donutFlavor, donutGlazings, donutToppings }) => {
  const DonutTypeOutput = svgSelector(DonutTypes, donutType)

  return (
    <div css={styles.canvas}>
      <div css={styles.donutTypeOutput({ fill: theme.colors.flavors[donutFlavor] })}>
        <DonutTypeOutput className="donut-type-output" />
      </div>

      {donutGlazings.map((donutGlazing) => {
        const DonutGlazingOutput = svgSelector(DonutGlazings, donutGlazing)

        return (
          <div css={styles.donutGlazingOutput}>
            <DonutGlazingOutput className="donut-glazing-output" />
          </div>
        )
      })}
    </div>
  )
}

export default Canvas

const styles = {
  canvas: () => [
    tw`
    flex justify-center items-center
    relative
    w-full
    rounded rounded-full
    bg-purple-200
    `,

    css`
    aspect-ratio: 1;
    `,
  ],
  donutTypeOutput: ({ fill }) => [
    tw`
    absolute
    w-full
    rounded rounded-full
    `,

    css`
    svg.donut-type-output #MOD{
      fill: ${fill} !important; //override style prop if present
    };
    svg.donut-type-output path.st5 { //cruller_base.svg inner circle fill color
      fill: ${theme.colors.background};
    };
    `,
  ],
  donutGlazingOutput: () => [
    tw`
    absolute
    w-full
    rounded rounded-full
    `,

    css`
    svg.donut-glazing-output .st10 { //remove Layer_3 (sprinkles) group - Asset Export Error
      display: none;
    };
    `,
  ],
}