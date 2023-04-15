import React from 'react';
import { StyledLink } from './Layout';

export default function AuthNav() {
  return (
    <div>
      <StyledLink to="/register">Registration</StyledLink>
      <StyledLink to="/login ">Login </StyledLink>
    </div>
  );
}
