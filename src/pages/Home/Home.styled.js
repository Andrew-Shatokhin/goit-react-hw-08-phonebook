import styled from 'styled-components';

export const Title = styled.h1`
  text-align: center;
  color:darkblue;
  font-size: 48px;
  text-shadow: 7px -1px 5px rgba(0, 0, 0, 0.4);


  -webkit-animation: text-focus-in 1s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
  animation: text-focus-in 2s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
  @-webkit-keyframes text-focus-in {
    0% {
      -webkit-filter: blur(12px);
      filter: blur(12px);
      opacity: 0;
    }
    100% {
      -webkit-filter: blur(0px);
      filter: blur(0px);
      opacity: 1;
    }
  }
  @keyframes text-focus-in {
    0% {
      -webkit-filter: blur(12px);
      filter: blur(12px);
      opacity: 0;
    }
    100% {
      -webkit-filter: blur(0px);
      filter: blur(0px);
      opacity: 1;
    }
  } 
`;
