import React from 'react'
import 'styled-components/macro'
import tw, { css } from 'twin.macro'

const Canvas = () => {
  return (
    <div css={styles.canvas}>
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
}