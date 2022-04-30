import { createGlobalStyle } from 'styled-components'

const RotatingStyles = createGlobalStyle`
  .rotating {
    -webkit-animation: rotating 30s linear infinite;
    -moz-animation: rotating 30s linear infinite;
    -ms-animation: rotating 30s linear infinite;
    -o-animation: rotating 30s linear infinite;
    animation: rotating 30s linear infinite;
  }

  @-webkit-keyframes rotating /* Safari and Chrome */ {
    from {
      -webkit-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @keyframes rotating {
    from {
      -ms-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -webkit-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -ms-transform: rotate(360deg);
      -moz-transform: rotate(360deg);
      -webkit-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`

export default RotatingStyles
