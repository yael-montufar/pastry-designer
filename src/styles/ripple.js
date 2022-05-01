import { createGlobalStyle } from 'styled-components'

const RippleStyles = createGlobalStyle`
  .ripple-button {
    position: relative;
    overflow: hidden;

    transition: background 400ms;
    outline: 0;
    border: 0;
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.3);

    .ripple {
      position: absolute;
      border-radius: 50%;
      transform: scale(0);
      animation: ripple 600ms linear;
      background-color: rgba(255, 255, 255, 0.7);
    }
  }
  
  @keyframes ripple {
    to {
    transform: scale(4);
    opacity: 0;
    }
  }
`

export default RippleStyles
