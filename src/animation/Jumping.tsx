import { keyframes } from 'styled-components';

const jumping = keyframes`{
    0%   { transform: scale(1,1)      translateY(0); }
    10%  { transform: scale(1.1,.9)   translateY(0); border-top-left-radius: 20px 100%; border-bottom-left-radius: 20px 100%; border-top-right-radius: 20px 100%; border-bottom-right-radius: 20px 100%; padding: 0 10px; }
    30%  { transform: scale(.9,1.1)   translateY(-50px); border-radius: 0; padding: 0; }
    50%  { transform: scale(1.05,.95) translateY(0); }
    57%  { transform: scale(1,1)      translateY(-7px); }
    64%  { transform: scale(1,1)      translateY(0); }
    100% { transform: scale(1,1)      translateY(0); }
  }`;

export default jumping;
