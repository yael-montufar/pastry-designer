import React from 'react'
import 'styled-components/macro'
import tw, { css } from 'twin.macro'
import { DonutToppingButtons } from 'assets'
import { svgSelector, handleAddons } from 'helpers'

const TOPPINGS = [
  "PowderedSugarTopping",
  "ChocolateSprinklesTopping",
  "StrawberrySprinklesTopping",
  "RainbowSprinklesTopping",
  "HeartCandyTopping",
  "CerealTopping",
]

const DonutToppingSelection = ({ setState }) => {
  return (
    <div css={styles.root}>
      <div css={styles.grid()}>
        {TOPPINGS.map((topping, index) => {
          const ToppingSelector = svgSelector(DonutToppingButtons, `${topping}Button`)

          return (
            <div key={`${topping}-${index}`} css={styles.gridItem()} onClick={() => handleAddons(setState, topping)}>
              <ToppingSelector className="donut-topping-selector" />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default DonutToppingSelection

const styles = {
  root: () => [
    tw`
    flex justify-center items-center
    w-full h-full
    
    // bg-gray-200
    `
  ],
  grid: () => [
    tw`
    flex flex-row //mobile
    sm:grid sm:grid-cols-2 sm:gap-x-4 sm:gap-y-16 //desktop

    space-x-2 //mobile
    sm:space-x-0 //desktop

    p-0 //mobile
    sm:p-4 //desktop

    // bg-purple-100
    `
  ],
  gridItem: () => [
    tw`
    flex justify-center items-center
    sm:inline-block

    rounded lg:rounded-3xl md:rounded-2xl sm:rounded-xl rounded-lg
    `,

    css`
    svg.donut-topping-selector {
      width: 100%;

      .st13 {
        display: none;
      };
    };

    @media (hover: hover) {
      &:hover {
        transform: scale(1.1);
      };
    };
    `
  ],
}