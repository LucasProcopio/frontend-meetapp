import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Content, Profile } from './styles';
import logo from '~/assets/logo.svg';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="Meet App" />
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>Lucas H. Procopio</strong>
              <Link to="/profile">My Profile</Link>
            </div>
            <button type="button">Logout</button>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
