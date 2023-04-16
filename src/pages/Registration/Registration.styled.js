import styled from 'styled-components';


export const Form = styled.form`
  width: 320px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  font-weight: 700;
  font-size: 18px;
  font-style: italic;
  color: #000977;
`;

export const Button = styled.button`
  border-radius: 5px;
  border-color: gray;
  background-color: #002bc0;
  font-weight: 500;
  text-transform: capitalize;
  font-style: italic;
  color: white;
  font-size: 18px;
  box-shadow: 0 10px 10px -5px rgba(0, 0, 0, 0.3);
  transition-property: color, background-color;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background-color: #fffb5e;
    color: blue;
    cursor: pointer;
`;
