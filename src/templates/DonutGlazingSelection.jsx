import React from 'react'
import 'styled-components/macro'
import tw, { css } from 'twin.macro'
import { DonutGlazingButtons } from 'assets'
import { svgSelector, handleAddons } from 'helpers'

const GLAZINGS = [
  "PlainGlaze",
  "ChocolateGlaze",
  "StrawberryGlaze",
  "MapleGlaze",
  "BlueberryGlaze",
  "PistachioGlaze",
]

const DonutGlazingSelection = ({ setState, setDefault }) => {
  return (
    <div css={styles.root}>
      <div css={styles.grid()}>
        {GLAZINGS.map((glazing, index) => {
          const GlazingSelector = svgSelector(DonutGlazingButtons, `${glazing}Button`)

          return (
            <div key={`${glazing}-${index}`} css={styles.gridItem()} onClick={() => handleAddons(setState, glazing, setDefault)}>
              <GlazingSelector className="donut-glazing-selector" />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default DonutGlazingSelection

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
    svg.donut-glazing-selector {
      width: 100%;
      
      cursor: pointer !important;
    };


    @media (hover: hover) {
      &:hover {
        transform: scale(1.1);
      };
    };
    `
  ],
}