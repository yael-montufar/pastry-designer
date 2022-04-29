import 'styled-components/macro'
import tw, { css } from "twin.macro";

function App() {
  return (
    <div css={styles.root}>
      <section css={styles.donutTypeSelector}>Type</section>


      <section css={styles.donutFlavorSelector({ layout: 'mobile' })}>Flavor</section>


      <section css={styles.output({ layout: 'mobile' })}>Output</section>


      <div css={styles.bodyGroup()}>
        <section css={styles.donutGlazingSelector}>Glazing</section>

        <section css={styles.output({ layout: 'desktop' })}>Output</section>

        <section css={styles.donutToppingSelector}>Topping</section>
      </div>


      <section css={styles.donutFlavorSelector({ layout: 'desktop' })}>Flavor</section>


      <section css={styles.copy({ layout: 'mobile' })}>Copy</section>


      <div css={styles.footerGroup}>
        <section css={styles.buttonContainer({ left: true })}>Reset</section>

        <section css={styles.copy({ layout: 'desktop' })}>Copy</section>

        <section css={styles.buttonContainer({ right: true })}>Share</section>
      </div>
    </div>
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
  donutTypeSelector: () => [
    tw`
    w-full h-24
    bg-red-100
    `,
  ],
  donutFlavorSelector: ({ layout }) => [
    tw`
    w-full h-20
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
    w-full
    bg-red-300
    `,

    layout === 'mobile' && tw`
    h-96
    flex //mobile
    sm:hidden //desktop
    `,

    layout === 'desktop' && tw`
    hidden //mobile
    sm:flex //desktop
    `
  ],
  canvas: () => [
    css`
    `,
  ],
  donutGlazingSelector: () => [
    tw`
    w-full h-24
    bg-red-400
    `,
  ],
  donutToppingSelector: () => [
    tw`
    w-full h-24
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
    w-full    h-20 //mobile
    sm:w-8/12 sm:h-full //desktop
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
    flex-grow
    bg-red-700
    `,

    left && tw`bg-red-700`,
    right && tw`bg-red-800`,
  ],
}
