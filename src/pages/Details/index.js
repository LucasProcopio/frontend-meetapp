import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdEdit, MdDeleteForever, MdPlace, MdEvent } from 'react-icons/md';
import PropTypes from 'prop-types';

import { deleteMeetupRequest } from '~/store/modules/meetup/actions';
import { Container, Content, DetailWrapper, Image } from './styles';

export default function Details({ location }) {
  const { meetup } = location.state;
  const dispatch = useDispatch();

  /**
   * Delete meetup
   */
  function handleDelete(meetupId) {
    dispatch(deleteMeetupRequest(meetupId));
  }

  return (
    <Container>
      <Content>
        <div className="header">
          <strong>{meetup.title}</strong>
          <div>
            <Link
              className="edit"
              to={{
                pathname: '/meetup',
                state: { meetup },
              }}
            >
              <MdEdit size={20} />
              Edit
            </Link>
            <button
              type="button"
              onClick={() => handleDelete(meetup.id)}
              className="cancel"
            >
              <MdDeleteForever size={20} />
              Cancel
            </button>
          </div>
        </div>

        <DetailWrapper>
          <Image url={meetup.banner.url} />

          <p className="description">{meetup.description}</p>

          <div className="location">
            <span>
              <MdEvent size={16} />
              {meetup.formattedDate}
            </span>
            <span>
              <MdPlace size={16} />
              {meetup.location}
            </span>
          </div>
        </DetailWrapper>
      </Content>
    </Container>
  );
}

Details.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      meetup: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        banner: PropTypes.shape({
          url: PropTypes.string,
        }),
        description: PropTypes.string,
        formattedDate: PropTypes.string,
        location: PropTypes.string,
      }),
    }),
  }).isRequired,
};
