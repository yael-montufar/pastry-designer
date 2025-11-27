import { toPng } from 'html-to-image';
import { saveAs } from 'file-saver';
import axios from 'axios'
import { theme } from 'styles';

const cloudName = process.env.NODE_ENV === "production" ? "design-emporium-llc" : "yaelmontufar"

const downloadSnapshot = () => {
  const desktopLayout = document.getElementById('desktop-canvas-layout')
  const mobileLayout = document.getElementById('mobile-canvas-layout')
  let canvas
  let copy

  if (desktopLayout.offsetParent) {
    canvas = document.getElementById('desktop-canvas')
    copy = document.getElementById("desktop-copy")
  } else if (mobileLayout.offsetParent) {
    canvas = document.getElementById('mobile-canvas')
    copy = document.getElementById("mobile-copy")
  }

  let modal = document.getElementById("modal")
  let preview = document.getElementById("preview")
  let frame = document.getElementById("frame")

  modal.classList.add("hidden")
  preview.classList.remove("hidden")

  let canvasClone = canvas.cloneNode(true)
  let copyClone = copy.cloneNode(true)

  copyClone.classList.add("format-copy")

  frame.appendChild(canvasClone)
  frame.appendChild(copyClone)

  toPng(frame, { backgroundColor: theme.colors.background, })
    .then((dataURL) => {
      saveAs(dataURL, 'my-awesome-donut.png')

      const data = new FormData();
      data.append("file", dataURL);
      data.append("upload_preset", "pastry-designer")

      axios.post(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        data
      ).then((response) => {
        // console.log(response.data.url)
      })
    })
    .catch((error) => {
      console.error('oops, something went wrong!', error);
    });
}

export default downloadSnapshot
