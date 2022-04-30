import React, { Fragment } from 'react'
import 'styled-components/macro'
import tw from 'twin.macro'
import { theme } from 'styles'
import { Button } from 'components'

const DONUT_FLAVORS = [
  "regular",
  "chocolate",
  "strawberry",
]

const DonutFlavorSelection = ({ setState }) => {
  return (
    <div css={styles.root}>
      {DONUT_FLAVORS.map((donutFlavor, index) => {
        return (
          <Fragment key={`${donutFlavor}-${index}`}>
            <Button label={donutFlavor} variant={'flavor'} fill={theme.colors.flavors[donutFlavor]} onClick={() => setState(donutFlavor)} />
            {index !== DONUT_FLAVORS.length - 1 && <span css={tw`mx-2`} />}
          </Fragment>
        )
      })}
    </div>
  )
}

export default DonutFlavorSelection

const styles = {
  root: () => [
    tw`
    w-full h-full
    flex flex-row justify-center items-center
    bg-gray-200
    `
  ],
}