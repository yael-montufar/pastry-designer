import React from 'react'
import 'styled-components/macro'
import tw, { css } from 'twin.macro'
import { DonutTypes, DonutGlazings, DonutToppings } from 'assets'
import { svgSelector } from 'helpers'
import { theme } from 'styles'
import { DonutHole } from 'components'

/** Layering
 * base (donut-type-output) | z-index: 1
 * glazing (donut-glazing-output) | z-index: 10 +
 * topping (donut-topping-output) | z-index: 20 +
 * DonutHole | z-index: 30
 */
const Canvas = ({ id, ...rest }) => {
  const { donutType, donutFlavor, donutGlazings, donutToppings } = rest
  const isEmpty = !donutType && !donutFlavor && [].concat(donutGlazings, donutToppings).length <= 0

  const DonutTypeOutput = svgSelector(DonutTypes, donutType)

  return (
    <div css={styles.canvas(isEmpty)} className="rotating" id={id}>
      <DonutHole {...rest} />

      <div css={styles.donutTypeOutput({ fill: theme.colors.flavors[donutFlavor ? donutFlavor : 'regular'] })}>
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
  canvas: (isEmpty) => [
    tw`
    flex justify-center items-center
    relative
    w-full
    rounded rounded-full
    overflow-hidden
    `,

    isEmpty && tw`bg-canvas`,

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
      fill: ${fill}
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
      width: 100%;
    };
    `,
  ],
}