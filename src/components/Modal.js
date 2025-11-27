import 'styled-components/macro'
import tw, { css, theme } from "twin.macro";
import { downloadSnapshot } from 'helpers';
import Button from './Button'
import DownloadButton from 'assets/download-button.png'
import FrameJPEG from 'assets/frame.jpeg'
import FrameWEBP from 'assets/frame.webp'


const Modal = ({ showModal, setShowModal }) => {
  const handleClose = () => {
    setShowModal(prev => !prev)

    const modal = document.getElementById("modal")
    const preview = document.getElementById("preview")
    const frame = document.getElementById("frame")

    preview.classList?.add("hidden")
    modal.classList.remove("hidden")
    // frame.firstChild?.remove()
    while (frame.firstChild) {
      frame.removeChild(frame.firstChild);
    }
  }

  return (
    <div css={styles.root({ showModal })}>
      <div css={styles.backrop} onClick={handleClose} />

      <div id="modal" css={styles.modal}>
        <div css={styles.header}>
          <span css={tw`capitalize font-Nunito`} className="text-select-none">download your donut</span>
          <span css={[tw`text-3xl cursor-pointer`]} onClick={handleClose}>&times;</span>
        </div>

        <div css={styles.body}>
          <div css={styles.list}>
            <div css={styles.listItem} onClick={() => downloadSnapshot()}><img src={DownloadButton} alt="Download" /></div>
          </div>
        </div>

        <div css={styles.footer}>
          <Button label={'cancel'} fill={theme`colors.flavors.strawberry`} onClick={handleClose} variant={'modal'} />
        </div>
      </div>

      <div id="preview" className='hidden' css={styles.preview}>
        <div css={[styles.header, tw`absolute left-0 top-0 flex justify-center items-center h-20`]}>
          {/* <span css={tw`capitalize font-Nunito capitalize text-3xl`}>I made this</span> */}
          <span css={[tw`absolute text-3xl cursor-pointer top-0 right-2`]} onClick={handleClose}>&times;</span>
        </div>

        <div id="frame" css={styles.frame} />
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
    position: absolute;

    @media only screen and (min-width: 640px) { //desktop
      width: 32em;
      height: 19em;

      margin: 0;

      left: 50%;
      top: 50%;
      transform: translateY(-50%) translateX(-50%);
    };

    @media only screen and (max-width: 640px) { //mobile
      width: 90%;
      height: auto;

      margin: 0;

      left: 50%;
      top: 50%;
      transform: translateY(-50%) translateX(-50%);
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
    flex m-auto space-x-4 justify-center items-center
    p-2
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
    cursor-pointer

    bg-white
    `,

    css`
    @media (hover: hover) {
      &:hover {
        transform: scale(1.1);
      };
    };
    `
  ],
  preview: () => [
    tw`
    p-8
    bg-white
    `,
    css`
    position: absolute;

    @media only screen and (min-width: 640px) { //desktop
      aspect-ratio: 1;
      height: 90vh;

      margin: 0;

      left: 50%;
      top: 50%;
      transform: translateY(-50%) translateX(-50%);
    };

    @media only screen and (max-width: 640px) { //mobile
      aspect-ratio: 1;
      width: 90%;

      left: 50%;
      top: 50%;
      transform: translateY(-50%) translateX(-50%);
    };
    `
  ],
  frame: () => [
    css`
    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;
    width: 100%;
    height: 100%;
    padding: 16%;
    
    border: 1px dashed #ccc;

    background-image: url(${FrameWEBP}), url(${FrameJPEG});
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover; /* Resize the background image to cover the entire container */
    `,
  ],
}
