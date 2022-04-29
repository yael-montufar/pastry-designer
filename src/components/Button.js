import React from 'react'
import 'styled-components/macro'
import tw, { css } from 'twin.macro'

const Button = ({ label, variant, fill }) => {
  return (
    <div css={styles.button({ variant, fill })}>{label}</div>
  )
}

export default Button

const styles = {
  button: ({ variant, fill }) => [
    tw`
    flex justify-center items-center
    h-10
    w-1/3 //mobile
    sm:w-32 md:w-40 lg:w-44 xl:w-48//desktop
    uppercase text-white
    text-sm
    rounded rounded-lg
    `,

    css`
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