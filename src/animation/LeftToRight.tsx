import { keyframes } from "styled-components";

// Create the keyframes
const leftToRight = keyframes`
  from {
    transform: translateX(-6px);
    opacity: 0;
  }

  to {
    transform: rotate(360deg);
    opacity: 1;
  };
`;

export default leftToRight;

// How to use
/* const Rotate = styled.div`
  animation: ${rotate} 2s linear infinite;
`; */
