import React from 'react'
import 'styled-components/macro'
import tw, { css } from 'twin.macro'
import { DonutTypes, DonutGlazings, DonutToppings } from 'assets'
import { svgSelector } from 'helpers'
import { theme } from 'styles'

const OFFSET_ROTATION = [ //offset by increments of 60deg
  'transform: translate(70%, -20%) rotate(60deg)',
  'transform: translate(120%, 30%) rotate(120deg)',
  'transform: translate(100%, 100%) rotate(180deg)',
  'transform: translate(30%, 120%) rotate(240deg)',
  'transform: translate(-20%, 70%) rotate(300deg)',
  'transform: translate(0%, 0%) rotate(360deg)',
]

const Canvas = ({ donutType, donutFlavor, donutGlazings, donutToppings }) => {
  const DonutTypeOutput = svgSelector(DonutTypes, donutType)

  /** Layering
   * base (donut-type-output) | z-index: 1
   * glazing (donut-type-glazing) | z-index: 10 +
   */
  return (
    <div css={styles.canvas}>
      <div css={styles.donutTypeOutput({ fill: theme.colors.flavors[donutFlavor] })}>
        <DonutTypeOutput className="donut-type-output" />
      </div>

      {donutGlazings.map((donutGlazing, index) => {
        const DonutGlazingOutput = svgSelector(DonutGlazings, donutGlazing)

        return (
          <div key={`${donutGlazing}-${index}`} css={styles.donutGlazingOutput({ base: donutType, index })}>
            <DonutGlazingOutput className="donut-glazing-output" />
          </div>
        )
      })}

      {donutToppings.map((donutTopping, index) => {
        const DonutToppingOutput = svgSelector(DonutToppings, donutTopping)

        return (
          <div key={`${donutTopping}-${index}`} css={styles.donutToppingOutput({ base: donutType, index })}>
            <DonutToppingOutput className="donut-topping-output" />
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
    overflow-hidden
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
    z-index: 1;

    svg.donut-type-output {
      #MOD{
        fill: ${fill} !important; //override style prop if present
      };

      path.st5 { //cruller_base.svg inner circle fill color
        fill: ${theme.colors.background};
      }
    }
    `,
  ],
  donutGlazingOutput: ({ base, index }) => [
    tw`
    absolute
    rounded rounded-full
    `,

    css`
    width: ${base === 'CrullerBase' ? '80%' : '85%'}; //adjust fit for cruller
    z-index: ${10 + index};
    transform: scale(${1 - (index * 0.075)});

    svg.donut-glazing-output .st10 { //remove Layer_3 (sprinkles) group - Asset Export Error
      display: none;
    };
    `,
  ],
  donutToppingOutput: ({ base, index }) => [
    tw`
    absolute
    rounded rounded-full
    `,

    css`
    width: ${base === 'CrullerBase' ? '75%' : '80%'}; //adjust fit for cruller
    z-index: ${20 + index};

    svg.donut-topping-output {
      .st13 { //remove Layer_3 (sprinkles) group - Asset Export Error
        display: none;
      };

      .st3 { //remove bowl (white) fill
        fill: transparent;
      };

      #Layer_3 > g:nth-of-type(3), //target rainbow-sprinkles-topping.svg
      #Layer_3 > g:nth-of-type(2) // target all other toppings
      {
        ${OFFSET_ROTATION[index]};
      };
    };
    `,
  ],
}