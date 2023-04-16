import React from 'react';
import { StyledLink } from './Layout';
import { useSelector } from 'react-redux';
import authSelectors from '../redux/auth/auth-selectors';

const Navigation = () => {

const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);

  return (
    <nav>
      <StyledLink to="/" end>
        Home
      </StyledLink>
      {isLoggedIn && <StyledLink to="/contacts">Contacts</StyledLink>}
    </nav>
  );

}


export default Navigation;
