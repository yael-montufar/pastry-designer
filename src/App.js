import { useEffect, useState } from 'react';
import 'styled-components/macro'
import tw from "twin.macro";
import {
  DonutTypeSelection,
  DonutFlavorSelection,
  DonutGlazingSelection,
  DonutToppingSelection,
} from 'templates'
import { Button, Canvas } from 'components'
import { COPY } from 'constants'
import { getStyledCopy } from 'helpers';

function App() {
  const [donutType, setDonutType] = useState('')
  const [donutFlavor, setDonutFlavor] = useState('')
  const [donutGlazings, setDonutGlazings] = useState([])
  const [donutToppings, setDonutToppings] = useState([])

  const [copy, setCopy] = useState('')

  const generateCopy = () => {
    const addons = [].concat(donutGlazings, donutToppings)
    let copy = ''
    let addonsCopy = ''

    if (addons.length > 0) {
      addonsCopy = ' with '

      addons.map((addon, index) => {
        if (index === 0) {
          addonsCopy = addonsCopy.concat(COPY[addon])
        } else if (index === addons.length - 1) {
          addonsCopy = addonsCopy.concat(`, and ${COPY[addon]}`)
        } else {
          addonsCopy = addonsCopy.concat(`, ${COPY[addon]}`)
        }
      })
    }

    if (donutType || donutFlavor || addons.length > 0) {
      copy = `I made a ${donutFlavor && COPY[donutFlavor] + ' '}${donutType && COPY[donutType] + ' '}donut${addonsCopy}`
    } else {
      copy = `I haven't started yet!`
    }

    setCopy(copy)
  }

  useEffect(() => {
    generateCopy()
  }, [donutType, donutFlavor, donutGlazings, donutToppings])

  return (
    <div css={styles.root}>
      <section css={styles.donutTypeSelection}>
        <DonutTypeSelection setState={setDonutType} />
      </section>


      <section css={styles.donutFlavorSelection({ layout: 'mobile' })}>
        <DonutFlavorSelection setState={setDonutFlavor} />
      </section>


      <section css={styles.output({ layout: 'mobile' })}>
        <Canvas />
      </section >


      <div css={styles.bodyGroup()}>
        <section css={styles.donutGlazingSelection}>
          <DonutGlazingSelection setState={setDonutGlazings} />
        </section>

        <section css={styles.output({ layout: 'desktop' })}>
          <Canvas />
        </section >

        <section css={styles.donutToppingSelection}>
          <DonutToppingSelection setState={setDonutToppings} />
        </section>
      </div >


      <section css={styles.donutFlavorSelection({ layout: 'desktop' })}>
        <DonutFlavorSelection setState={setDonutFlavor} />
      </section>


      <section css={styles.copy({ layout: 'mobile' })}>{getStyledCopy(copy)}</section>


      <div css={styles.footerGroup}>
        <section css={styles.buttonContainer({ left: true })}>
          <Button label='start over' variant='action' fill='transparent' />
        </section>

        <section css={styles.copy({ layout: 'desktop' })}>{getStyledCopy(copy)}</section>

        <section css={styles.buttonContainer({ right: true })}>
          <Button label='all done?' variant='action' fill='transparent' />
        </section>
      </div>
    </div >
  );
}

export default App;

const styles = {
  root: () => [
    tw`
    flex flex-col
    w-full min-h-screen
    bg-gray-700
    `
  ],
  donutTypeSelection: () => [
    tw`
    w-full h-auto
    p-2
    bg-red-100
    `,
  ],
  donutFlavorSelection: ({ layout }) => [
    tw`
    w-full h-auto
    p-2
    bg-red-200
    `,

    layout === 'mobile' && tw`
    flex //mobile
    sm:hidden //desktop
    `,

    layout === 'desktop' && tw`
    hidden //mobile
    sm:flex //desktop
    `,
  ],
  bodyGroup: () => [
    tw`
    flex
    flex-col //mobile
    sm:flex-row //desktop
    w-full
    bg-blue-100
    `,
  ],
  output: ({ layout }) => [
    tw`
    justify-center items-center
    w-full //mobile
    sm:w-1/2 //desktop
    bg-red-300
    p-2 py-4
    xl:p-16 lg:p-12 md:p-10 sm:p-8
    `,

    layout === 'mobile' && tw`
    flex //mobile
    sm:hidden //desktop
    `,

    layout === 'desktop' && tw`
    hidden //mobile
    sm:flex //desktop
    `
  ],
  donutGlazingSelection: () => [
    tw`
    w-full h-auto //mobile
    sm:w-1/4 //desktop
    p-2
    bg-red-400
    `,
  ],
  donutToppingSelection: () => [
    tw`
    w-full h-auto //mobile
    sm:w-1/4 //desktop
    p-2
    bg-red-500
    `,
  ],
  footerGroup: () => [
    tw`
    w-full h-20
    flex flex-row justify-between
    bg-blue-100
    `,
  ],
  copy: ({ layout }) => [
    tw`
    w-full //mobile
    sm:w-8/12 //desktop
    flex justify-center items-center
    p-2
    uppercase

    bg-red-600
    `,

    layout === 'mobile' && tw`
    flex //mobile
    sm:hidden //desktop
    `,

    layout === 'desktop' && tw`
    hidden //mobile
    sm:flex //desktop
    `,
  ],
  buttonContainer: ({ left, right }) => [
    tw`
    flex flex-grow justify-center items-center
    p-2
    bg-red-700
    `,

    left && tw`bg-red-700`,
    right && tw`bg-red-800`,
  ],
}
