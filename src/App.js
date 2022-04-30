import { useState } from 'react';
import 'styled-components/macro'
import tw from "twin.macro";
import {
  DonutTypeSelection,
  DonutFlavorSelection,
  DonutGlazingSelection,
  DonutToppingSelection,
} from 'templates'
import { Button, Canvas } from 'components'

function App() {
  const [donutType, setDonutType] = useState('')
  const [donutFlavor, setDonutFlavor] = useState('')
  const [donutGlazings, setDonutGlazings] = useState([])
  const [donutToppings, setDonutToppings] = useState([])

  const handleAddons = (setState, addon) => {
    setState(prev => {
      let state = [...prev]
      if (state.includes(addon)) {
        const index = state.indexOf(addon)
        state.splice(index, 1) //remove 1 item @ index
        return state
      } else {
        state.push(addon)
        return state
      }
    })
  }

  return (
    <div css={styles.root}>
      <section css={styles.donutTypeSelection}>
        <DonutTypeSelection setState={setDonutType} />
      </section>


      <section css={styles.donutFlavorSelection({ layout: 'mobile' })}>
        <DonutFlavorSelection setState={setDonutFlavor} />
      </section>


      <section css={styles.output({ layout: 'mobile' })}>
        <Canvas onClick={() => console.log(
          `Donut Type: ${donutType}`, `Donut Flavor: ${donutFlavor}`, `Donut Glazings: ${donutGlazings}`, `Donut Toppings: ${donutToppings}`
        )} />
      </section >


      <div css={styles.bodyGroup()}>
        <section css={styles.donutGlazingSelection}>
          <DonutGlazingSelection setState={setDonutGlazings} handleAddons={handleAddons} />
        </section>

        <section css={styles.output({ layout: 'desktop' })}>
          <Canvas />
        </section >

        <section css={styles.donutToppingSelection}>
          <DonutToppingSelection setState={setDonutToppings} handleAddons={handleAddons} />
        </section>
      </div >


      <section css={styles.donutFlavorSelection({ layout: 'desktop' })}>
        <DonutFlavorSelection />
      </section>


      <section css={styles.copy({ layout: 'mobile' })}>Copy</section>


      <div css={styles.footerGroup}>
        <section css={styles.buttonContainer({ left: true })}>
          <Button label='start over' variant='action' fill='transparent' />
        </section>

        <section css={styles.copy({ layout: 'desktop' })}>Copy</section>

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
