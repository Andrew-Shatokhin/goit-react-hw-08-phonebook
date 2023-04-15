import { useDispatch, useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import { UserBox, Text, Button } from './UserMenu.styled';
import {logOut} from '../../redux/auth/auth-operations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.selectUsername);

  return (
    <UserBox>
      <Text>Welcome, {name} </Text>
      <Button type="button" onClick={()=>dispatch(logOut())}>Logout</Button>
    </UserBox>
  );
};
