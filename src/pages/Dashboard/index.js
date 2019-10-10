import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FaSpinner } from 'react-icons/fa';

import { Container, Content, Loader } from './styles';
import { getMeetUpsRequest } from '~/store/modules/user/actions';

export default function Dashboard() {
  const meetups = useSelector(state => state.user.meetups);
  const loading = useSelector(state => state.user.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMeetUpsRequest());
  }, [dispatch]);

  return (
    <Container>
      <Content>
        <div>
          <strong>My meetups</strong>
          <Link to="/meetup/new">New meetup</Link>
        </div>

        {loading === false ? (
          <ul>
            {meetups.map(meetup => (
              <li>
                <strong>{meetup.title}</strong>
                <span>{meetup.formattedDate}</span>
              </li>
            ))}
          </ul>
        ) : (
          <Loader>
            <FaSpinner size="45" fill="#fff" />
          </Loader>
        )}
      </Content>
    </Container>
  );
}
