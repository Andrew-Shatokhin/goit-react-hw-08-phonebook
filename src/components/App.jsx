import { Routes, Route } from 'react-router-dom';
import { useEffect, lazy} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SharedLayout from './SharedLayout/SharedLayout';
import { fetchCurrentUser } from '../redux/auth/auth-operations';
import { PrivateRoute } from '../components/PrivateRoute';
import { RestrictedRoute } from '../components/RestrictedRoute';
import  authSelectors  from '../redux/auth/auth-selectors';

const Home = lazy(() => import('../pages/Home/Home'));
const Register = lazy(() => import('../pages/Registration/Registration'));
const Login = lazy(() => import('../pages/Login/Login'));
const Contacts = lazy(() => import('../pages/Contacts/Contacts'));


export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);


  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return(
    isFetchingCurrentUser ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Register />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Login />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          }
        />
      </Route>

    </Routes>
  )

  )
}

