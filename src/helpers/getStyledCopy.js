import 'styled-components/macro'
import tw from "twin.macro";
import { COPY } from 'constants'

const WHITE_LIST = [].concat(Object.values(COPY), "donut")

const getStyledCopy = (copy) => {
  const styledCopy = copy.split(' ').map((word, index) => {
    const hasComma = word.indexOf(',') > -1
    const hasBang = word.indexOf('!') > -1

    let tmp = word

    if (hasComma || hasBang) { //hasComma
      tmp = tmp.replace(/(,|!)/g, '')
    }

    const isHighlighted = WHITE_LIST.includes(tmp)

    if (tmp.indexOf('_') > -1) { //hasUnderscore
      tmp = tmp.replace(/_/g, ' ')
    }

    const output = (
      <span key={`${word}-${index}`} css={tw`inline-block whitespace-nowrap`}>
        <span css={isHighlighted && tw`text-red-400`}>{tmp}</span>{hasComma && ','}{hasBang && '!'}&nbsp;
      </span>
    )

    return output
  })

  return <p css={tw`text-black`}>{styledCopy}</p>
}

export default getStyledCopy