import axios from 'axios'
import { toPng } from 'html-to-image';

const uploadSnapshot = () => {
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
      const data = new FormData();
      data.append("file", dataURL);
      data.append("upload_preset", "pastry-designer")

      axios.post(
        "https://api.cloudinary.com/v1_1/yaelmontufar/image/upload",
        data
      ).then((response) => {
        console.log(response.data.url)
      })
    })
    .catch((error) => {
      console.error('oops, something went wrong!', error);
    });
}



export default uploadSnapshot
