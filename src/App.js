import { useEffect, useState } from 'react';
import 'styled-components/macro'
import tw, { css } from "twin.macro";
import {
  DonutTypeSelection,
  DonutFlavorSelection,
  DonutGlazingSelection,
  DonutToppingSelection,
  Canvas,
} from 'templates'
import { Button, Modal } from 'components'
import { COPY } from 'constants'
import { getStyledCopy } from 'helpers';

function App() {
  const [showModal, setShowModal] = useState(false)

  const [donutType, setDonutType] = useState('')
  const [donutFlavor, setDonutFlavor] = useState('')
  const [donutGlazings, setDonutGlazings] = useState([])
  const [donutToppings, setDonutToppings] = useState([])

  const [copy, setCopy] = useState('')

  const resetState = () => {
    setDonutType('')
    setDonutFlavor('')
    setDonutGlazings([])
    setDonutToppings([])
    setCopy('')
  }

  const handleSetDefault = () => {
    setDonutType((prev) => prev === '' ? "DonutBase" : prev)
  }

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
      copy = `I made a ${donutFlavor && COPY[donutFlavor] + ' '}${donutType && COPY[donutType] + ' '}donut${addonsCopy}!`
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
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <section css={styles.donutTypeSelection}>
        <div css={tw`font-Nunito capitalize text-4xl text-center pb-2`}>choose your donut type</div>
        <DonutTypeSelection setState={setDonutType} />
      </section>


      <section css={styles.donutFlavorSelection({ layout: 'mobile' })}>
        <div css={tw`font-Nunito capitalize text-4xl text-center pb-2`}>choose your donut flavor</div>
        <DonutFlavorSelection setState={setDonutFlavor} setDefault={handleSetDefault} />
      </section>


      <section id='mobile-canvas-layout' css={styles.output({ layout: 'mobile' })}>
        <Canvas id={'mobile-canvas'} donutType={donutType} donutFlavor={donutFlavor} donutGlazings={donutGlazings} donutToppings={donutToppings} />
      </section >


      <div css={styles.bodyGroup()}>
        <section css={styles.donutGlazingSelection}>
          <div css={tw`font-Nunito capitalize text-4xl text-center pb-2`}>glazes</div>
          <DonutGlazingSelection setState={setDonutGlazings} setDefault={handleSetDefault} />
        </section>

        <section id='desktop-canvas-layout' css={styles.output({ layout: 'desktop' })}>
          <Canvas id={'desktop-canvas'} donutType={donutType} donutFlavor={donutFlavor} donutGlazings={donutGlazings} donutToppings={donutToppings} />
        </section >

        <section css={styles.donutToppingSelection}>
          <div css={tw`font-Nunito capitalize text-4xl text-center pb-2`}>toppings</div>
          <DonutToppingSelection setState={setDonutToppings} setDefault={handleSetDefault} />
        </section>
      </div >


      <section css={styles.donutFlavorSelection({ layout: 'desktop' })}>
        <div css={tw`font-Nunito capitalize text-4xl text-center pb-2`}>choose your donut flavor</div>
        <DonutFlavorSelection setState={setDonutFlavor} setDefault={handleSetDefault} />
      </section>


      <section id='mobile-copy' css={styles.copy({ layout: 'mobile' })}>{getStyledCopy(copy)}</section>


      <div css={styles.footerGroup}>
        <section css={styles.buttonContainer({ left: true })}>
          <Button label='start over' variant='action' fill='transparent' onClick={resetState} />
        </section>

        <section id='desktop-copy' css={styles.copy({ layout: 'desktop' })}>{getStyledCopy(copy)}</section>

        <section css={styles.buttonContainer({ right: true })}>
          <Button label='all done?' variant='action' fill='transparent' onClick={() => setShowModal(prev => !prev)} />
        </section>
      </div>
    </div >
  );
}

export default App;

const styles = {
  root: () => [
    tw`
    relative

    flex flex-col
    w-full min-h-screen

    // bg-gray-700
    `
  ],
  donutTypeSelection: () => [
    tw`
    flex flex-col justify-center items-center
    w-full h-auto
    p-2

    // bg-red-100
    `,
  ],
  donutFlavorSelection: ({ layout }) => [
    tw`
    w-full h-auto
    p-2

    // bg-red-200
    `,

    layout === 'mobile' && tw`
    flex flex-col justify-center items-center //mobile
    sm:hidden //desktop
    `,

    ,

    layout === 'desktop' && css`
    padding-left: 25%;
    padding-right: 25%;
    ${tw`
    hidden //mobile
    sm:flex sm:flex-col sm:justify-center sm:items-center //desktop
    `}
    `
  ],
  bodyGroup: () => [
    tw`
    flex
    flex-col //mobile
    sm:flex-row //desktop
    w-full

    // bg-blue-100
    `,
  ],
  output: ({ layout }) => [
    tw`
    overflow-hidden //FIX issue with .rotating creating an offset between the body and the html/document
    
    justify-center items-center
    w-full //mobile
    sm:w-1/2 //desktop
    p-2 py-4
    xl:p-16 lg:p-12 md:p-10 sm:p-8

    // bg-red-300
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
    flex flex-col justify-center items-center
    w-full h-auto //mobile
    sm:w-1/4 //desktop
    p-2

    // bg-red-400
    `,
  ],
  donutToppingSelection: () => [
    tw`
    flex flex-col justify-center items-center
    w-full h-auto //mobile
    sm:w-1/4 //desktop
    p-2

    // bg-red-500
    `,
  ],
  footerGroup: () => [
    tw`
    w-full h-auto
    flex flex-row justify-between items-start

    // bg-blue-100
    `,
  ],
  copy: ({ layout }) => [
    tw`
    w-full //mobile
    sm:w-8/12 //desktop
    flex justify-center items-center
    p-2
    uppercase
    text-center

    // bg-red-600
    `,

    css`
    font-size: 20px;
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
    flex
    p-2
    px-8

    // bg-red-700
    `,

    left && tw`
    w-1/2
    sm:w-1/3
    flex-grow
    justify-start

    // bg-red-700
    `,
    right && tw`
    w-1/2
    sm:w-1/3
    flex-grow
    justify-end

    // bg-red-800
    `,
  ],
}
