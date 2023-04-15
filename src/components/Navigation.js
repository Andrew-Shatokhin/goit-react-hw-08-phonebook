import React from 'react';
import { StyledLink } from './Layout';

const Navigation = () => (
  <nav>
    <StyledLink to="/" end>
      Home
    </StyledLink>
    <StyledLink to="/contacts">Contacts</StyledLink>
  </nav>
);

export default Navigation;
