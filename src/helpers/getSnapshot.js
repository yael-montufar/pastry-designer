import { toPng } from 'html-to-image';
import { saveAs } from 'file-saver';

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
      window.saveAs(dataURL, 'my-awesome-donut.png')
    })
    .catch((error) => {
      console.error('oops, something went wrong!', error);
    });
}

export default getSnapshot
