import { Routes, Route } from 'react-router-dom';
// import { GlobalStyle } from './GlobalStyle';
// import { Layout } from './Layout';
// import Form from './Form/Form';
// import Filter from './Filter/Filter';
// import ContactsList from './ContactsList/ContactsList';
// import { Title, TitleSection } from './App.styled';

import { useEffect, lazy} from 'react';
import { useDispatch } from 'react-redux';
// import { fetchContacts } from '../redux/contacts/operations';
// import { selectIsLoading, selectError } from '../redux/contacts/selectors';
import SharedLayout from './SharedLayout/SharedLayout';
import { fetchCurrentUser } from '../redux/auth/auth-operations';
import { PrivateRoute } from '../components/PrivateRoute';
import { RestrictedRoute } from '../components/RestrictedRoute';

const Home = lazy(() => import('../pages/Home/Home'));
const Register = lazy(() => import('../pages/Registration/Registration'));
const Login = lazy(() => import('../pages/Login/Login'));
const Contacts = lazy(() => import('../pages/Contacts/Contacts'));


export default function App() {
  const dispatch = useDispatch();
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
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

    // <Layout>
    //   {isLoading && !error && <b>Request in progress..</b>}
    //   {error && <b style={{ fontSize: 24, textAlign: 'center' }}>{error}</b>}

    //   <Title>Phonebook</Title>
    //   <Form />
    //   <TitleSection>Contacts</TitleSection>
    //   <Filter />
    //   <ContactsList />

    //   <GlobalStyle />
    // </Layout>
  );
}

// import { lazy } from 'react';
// import { Routes, Route } from 'react-router-dom';
// // import SharedLayout from './SharedLayout/SharedLayout';

// const Home = lazy(() => import('../pages/Home/Home'));
// const Movies = lazy(() => import('../pages/Movies/Movies'));
// const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
// const Cast = lazy(() => import('./Cast/Cast'));
// const Reviews = lazy(() => import('./Reviews/Reviews'));
// const NotFound = lazy(() => import('../pages/NotFound'));

// export const App = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<SharedLayout />}>
//         <Route index element={<Home />} />
//         <Route path="movies" element={<Movies />} />
//         <Route path="movies/:movieId" element={<MovieDetails />}>
//           <Route path="cast" element={<Cast />} />
//           <Route path="reviews" element={<Reviews />} />
//         </Route>

//         <Route path="*" element={<NotFound />} />
//       </Route>
//     </Routes>
//   );
// };
