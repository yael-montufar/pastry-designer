import 'styled-components/macro'
import tw, { css } from "twin.macro";

const Modal = ({ showModal, toggleModal }) => {
  return (
    <div css={styles.root({ showModal })}>
      <div css={styles.backrop} onClick={toggleModal} />
      <div css={styles.modal}></div>
    </div>
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
    css`
    ${tw`bg-white`};
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
}
