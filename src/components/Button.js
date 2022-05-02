import React from 'react'
import 'styled-components/macro'
import tw, { css } from 'twin.macro'
import { createRipple } from 'helpers'

const Button = ({ onClick, label, variant, fill }) => {
  return (
    <div css={styles.button({ variant, fill })} className={`text-select-none ripple-button`}
      onClick={(event) => {
        createRipple(event)
        onClick()
      }}
    >{label}</div>
  )
}

export default Button

const styles = {
  button: ({ variant, fill }) => [
    tw`
    flex justify-center items-center
    h-10
    p-4
    uppercase text-white
    text-xs sm:text-sm
    rounded rounded-lg
    `,

    css`
    background-color: ${fill};
    @media (hover: hover) {
      &:hover {
        transform: scale(1.05)
      };
    };

    white-space: nowrap;
    `,

    variant === 'flavor' && css`
    width: 33%;
    @media only screen and (min-width: 640px) {
      // width: 25%;
    };
    `,

    variant === 'action' && tw`
    border border-[#c5bf49]
    text-[#c5bf49]
    `,

    variant === 'modal' && tw`
    w-full
    sm:w-1/3
    `
  ],
}