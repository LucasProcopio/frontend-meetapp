import React from 'react';
import { Link } from 'react-router-dom';
import { MdEdit, MdDeleteForever, MdPlace, MdEvent } from 'react-icons/md';
import PropTypes from 'prop-types';

import { Container, Content, DetailWrapper, Image } from './styles';

export default function Details({ location }) {
  const { meetup } = location.state;

  return (
    <Container>
      <Content>
        <div className="header">
          <strong>{meetup.title}</strong>
          <div>
            <Link
              className="edit"
              to={{
                pathname: '/meetup/edit',
                state: { meetup },
              }}
            >
              <MdEdit size={20} />
              Edit
            </Link>
            <Link className="cancel" to="/meetup/delete">
              <MdDeleteForever size={20} />
              Cancel
            </Link>
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
