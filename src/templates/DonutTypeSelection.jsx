import React, { Fragment } from 'react'
import 'styled-components/macro'
import tw, { css, theme } from 'twin.macro'
import { DonutTypes } from 'assets'
import { svgSelector } from 'helpers'

const DONUT_TYPES = [
  "DonutBase",
  "CrullerBase",
  "JellyFilledBase",
]

const DonutTypeSelection = ({ setState }) => {
  return (
    <div css={styles.root}>
      {DONUT_TYPES.map((donutType, index) => {
        const DonutType = svgSelector(DonutTypes, donutType)

        return (
          <Fragment key={`${donutType}-${index}`}>
            <div css={styles.donutTypeButton} onClick={() => setState(donutType)}>
              <DonutType className="donut-type-selector" />
            </div>
            {index !== DONUT_TYPES.length - 1 && <span css={tw`mx-4 sm:mx-12`} />}
          </Fragment>
        )
      })}
    </div>
  )
}

export default DonutTypeSelection

const styles = {
  root: () => [
    tw`
    w-full h-full
    flex flex-row justify-center items-center

    // bg-gray-300
    `
  ],
  donutTypeButton: () => [
    tw`
    w-20 //mobile
    sm:w-24 //desktop
    rounded rounded-full
    
    // bg-green-100
    `,

    css`
    svg.donut-type-selector {
      fill: ${theme`colors.flavors.regular`};
      cursor: pointer !important;
    }

    @media (hover: hover) {
      &:hover {
        box-shadow: 0px 0px 4px 8px ${theme`colors.flavors.regular` + '7f'};
      };
    };
    `,
  ],
}