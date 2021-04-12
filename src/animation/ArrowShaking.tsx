import { keyframes } from 'styled-components';

// Create the keyframes
const ArrowShaking = keyframes`
  0% {
      transform: translateY(0px);
  }
  50% {
    transform: translateY(6px);      
  };  
  100% {
   transform: translateY(0px);
  }
`;

export default ArrowShaking;
