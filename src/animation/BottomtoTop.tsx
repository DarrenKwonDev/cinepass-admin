import { keyframes } from 'styled-components';

// Create the keyframes
const BottomtoTop = keyframes`
  from {
    transform: translateY(35px);
    opacity: 0;
  }
  
  to {
    transform: translateY(40px);
    opacity: 1;
  };
`;

export default BottomtoTop;
