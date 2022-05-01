/** source
 * https://css-tricks.com/how-to-recreate-the-ripple-effect-of-material-design-buttons/
 */
import { createGlobalStyle } from 'styled-components'

const RippleStyles = createGlobalStyle`
  .ripple-button {
    position: relative;
    overflow: hidden;

    transition: background 400ms;

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
