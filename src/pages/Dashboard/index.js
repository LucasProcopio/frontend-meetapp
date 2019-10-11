import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FaSpinner } from 'react-icons/fa';
import { MdAddCircleOutline, MdChevronRight } from 'react-icons/md';

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
          <Link to="/meetup/new">
            <MdAddCircleOutline size={20} />
            New meetup
          </Link>
        </div>

        {loading === false ? (
          <ul>
            {meetups.map(meetup => (
              <Link
                to={{
                  pathname: '/details',
                  state: {
                    meetup,
                  },
                }}
              >
                <li key={meetup.id}>
                  <strong>{meetup.title}</strong>
                  <span>
                    {meetup.formattedDate}
                    <MdChevronRight size={24} />
                  </span>
                </li>
              </Link>
            ))}
          </ul>
        ) : (
          <Loader>
            <FaSpinner size={45} />
          </Loader>
        )}
      </Content>
    </Container>
  );
}
