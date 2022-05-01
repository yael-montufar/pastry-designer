import React from 'react'
import 'styled-components/macro'
import tw, { css } from 'twin.macro'
import { createRipple } from 'helpers'

const Button = ({ onClick, label, variant, fill }) => {
  return (
    <div css={styles.button({ variant, fill })} className={`text-select-none ${variant === 'flavor' && 'ripple-button'}`}
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
    uppercase text-white
    text-xs sm:text-sm
    rounded rounded-lg
    `,

    css`
    width: 33%;
    background-color: ${fill};
    `,

    variant === 'action' && tw`
    flex-shrink-0
    w-32 sm:w-40
    border border-[#c5bf49]
    text-[#c5bf49]
    `,
  ],
}