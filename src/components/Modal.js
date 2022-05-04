import 'styled-components/macro'
import tw, { css, theme } from "twin.macro";
import Button from './Button'
import DownloadButton from 'assets/download-button.png'
import { downloadSnapshot, uploadSnapshot } from 'helpers';

const Modal = ({ showModal, toggleModal }) => {
  return (
    <div css={styles.root({ showModal })}>
      <div css={styles.backrop} onClick={toggleModal} />

      <div css={styles.modal}>
        <div css={styles.header}>
          <span css={tw`capitalize`} className="text-select-none">share</span>
          <span css={[tw`text-3xl cursor-pointer`]} onClick={toggleModal}>&times;</span>
        </div>

        <div css={styles.body}>
          <div css={styles.list}>
            <div css={styles.listItem} onClick={() => downloadSnapshot()}><img src={DownloadButton} /></div>
          </div>
        </div>

        <div css={styles.footer}>
          <Button label={'cancel'} fill={theme`colors.flavors.strawberry`} onClick={toggleModal} variant={'modal'} />
        </div>
      </div>
    </div >
  )
}

export default Modal

const styles = {
  root: ({ showModal }) => [
    css`
    z-index: 100;
    ${tw`
      absolute
      w-full h-full
    `};
    `,
    !showModal && tw`hidden`
  ],
  backrop: () => [
    tw`
      absolute
      w-full h-full
      bg-[#202020a0]
    `
  ],

  modal: () => [
    tw`
    flex flex-col

    bg-canvas
    `,
    css`
    position: fixed;

    @media only screen and (min-width: 640px) { //desktop
      width: 32em;
      height: 19em;

      margin: 0;

      left: 50%;
      top: 50%;
      transform: translateY(-50%) translateX(-50%);
    };

    @media only screen and (max-width: 640px) { //mobile
      width: 100%;
      height: 30vh;

      bottom: 0;
      bottom: env(safe-area-inset-bottom);
    };
    `
  ],

  header: () => [
    tw`
    flex justify-between items-center
    w-full h-12
    p-2

    // bg-red-100
    `
  ],
  body: () => [
    tw`
    flex flex-grow items-center justify-center
    w-full
    px-8
    sm:px-16
    

    // bg-red-200
    `
  ],
  footer: () => [
    tw`
    flex justify-center items-center
    w-full
    p-4

    // bg-red-300
    `
  ],
  list: () => [
    tw`
    flex m-auto space-x-4
    // h-16
    overflow-x-scroll

    // bg-purple-100
    `,
    css`
    `
  ],
  listItem: () => [
    tw`
    w-16 h-16
    p-2
    rounded-full

    bg-white
    `,
  ],
}
