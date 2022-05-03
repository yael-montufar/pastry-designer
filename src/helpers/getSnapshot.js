import { toPng } from 'html-to-image';

const getSnapshot = () => {
  const desktopLayout = document.getElementById('desktop-canvas-layout')
  const mobileLayout = document.getElementById('mobile-canvas-layout')
  let canvas

  if (desktopLayout.offsetParent) {
    canvas = document.getElementById('desktop-canvas')
  } else if (mobileLayout.offsetParent) {
    canvas = document.getElementById('mobile-canvas')
  }

  toPng(canvas)
    .then((dataURL) => {
      const win = window.open();

      win.document.write(`
        <iframe
        src="${dataURL}"
        frameborder="0"
        style="
          border:0;
          top:0px;
          left:0px;
          bottom:0px;
          right:0px;
          width:100%;
          height:100%;
        "
        allowfullscreen
        >
        </iframe>
      `)
    })
    .catch((error) => {
      console.error('oops, something went wrong!', error);
    });
}

export default getSnapshot
