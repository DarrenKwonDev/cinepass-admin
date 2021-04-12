import { keyframes } from 'styled-components';

// Create the keyframes
const rightToLeft = keyframes`
  from {
    transform: translate3d(25%, 0, 0);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  };
`;

export default rightToLeft;

// How to use
/* const Rotate = styled.div`
  animation: ${rotate} 2s linear infinite;
`; */
