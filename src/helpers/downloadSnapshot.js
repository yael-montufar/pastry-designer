import { toPng } from 'html-to-image';
import { saveAs } from 'file-saver';
import axios from 'axios'
import { theme } from 'styles';

const getSnapshot = () => {
  const desktopLayout = document.getElementById('desktop-canvas-layout')
  const mobileLayout = document.getElementById('mobile-canvas-layout')
  let canvas

  if (desktopLayout.offsetParent) {
    canvas = document.getElementById('desktop-canvas')
  } else if (mobileLayout.offsetParent) {
    canvas = document.getElementById('mobile-canvas')
  }

  let frame = document.createElement("div")
  frame.className = "frame"

  let canvasClone = canvas.cloneNode(true)

  frame.appendChild(canvasClone)

  document.body.appendChild(frame)

  toPng(frame, { backgroundColor: theme.colors.background })
    .then((dataURL) => {
      frame.remove()

      const data = new FormData();
      data.append("file", dataURL);
      data.append("upload_preset", "pastry-designer")

      axios.post(
        "https://api.cloudinary.com/v1_1/yaelmontufar/image/upload",
        data
      ).then((response) => {
        console.log(response.data.url)
      })

      window.saveAs(dataURL, 'my-awesome-donut.png')
    })
    .catch((error) => {
      console.error('oops, something went wrong!', error);
    });
}

export default getSnapshot
