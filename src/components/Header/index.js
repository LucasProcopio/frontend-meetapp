import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { logOut } from '~/store/modules/user/actions';
import history from '~/services/history';
import { Container, Content, Profile } from './styles';
import logo from '~/assets/logo.svg';

export default function Header() {
  const profile = useSelector(state => state.user.profile);
  const dispatch = useDispatch();

  /**
   * User Logout
   */
  function handleLogOut() {
    dispatch(logOut());
    history.push('/');
  }

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="Meet App" />
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <Link to="/profile">My Profile</Link>
            </div>
            <button onClick={handleLogOut} type="button">
              Logout
            </button>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
