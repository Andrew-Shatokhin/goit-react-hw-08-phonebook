import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Layout = styled.div`
  width: 500px;
  display: flex;
  margin: 20px auto;
  padding: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 40;
  color: #010101;

  background: #5433ff;
  background: -webkit-linear-gradient(to right, #a5fecb, #20bdff, #5433ff);
  background: linear-gradient(to right, #a5fecb, #20bdff, #5433ff);

  border-radius: 10px;
  box-shadow: 25px 31px 40px 26px rgba(28, 28, 25, 0.76);
  -webkit-box-shadow: 25px 31px 40px 26px rgba(28, 28, 25, 0.76);
  -moz-box-shadow: 25px 31px 40px 26px rgba(28, 28, 25, 0.76);
  -webkit-animation: color-change-2x 4s linear infinite alternate-reverse both;
  animation: color-change-2x 4s linear infinite alternate-reverse both;
  @-webkit-keyframes color-change-2x {
    0% {
      background: #19dcea;
    }
    100% {
      background: #b22cff;
    }
  }
  @keyframes color-change-2x {
    0% {
      background: #19dcea;
    }
    100% {
      background: #b22cff;
    }
  }
`;

export const StyledLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  &.active {
    color: white;
    background-color: blue;
  }
`;
