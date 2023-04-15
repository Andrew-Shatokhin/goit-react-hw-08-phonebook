import { GlobalStyle } from '../GlobalStyle';
import { Header } from './SharedLayout.styled';

import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { UserMenu } from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav';
import Navigation from '../Navigation';
import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';

const SharedLayout = () => {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
  return (
    <div>
      <Header>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Header>

      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
      <GlobalStyle />
    </div>
  );
};

export default SharedLayout;
