import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import PropTypes from 'prop-types';
import * as Yup from 'yup';

import { MdAddCircleOutline } from 'react-icons/md';
import { FaSpinner } from 'react-icons/fa';

import {
  newMeetupRequest,
  updateMeetupRequest,
} from '~/store/modules/meetup/actions';
import BannerInput from './components/BannerInput/index';
import DatepickerInput from './components/DatepickerInput/index';
import { Container, Loader } from './styles';

export default function New({ location }) {
  const meetup = location.state ? location.state.meetup : null;

  const dispatch = useDispatch();
  const loading = useSelector(state => state.meetup.loading);

  const schema = Yup.object({
    file_id: Yup.string(),
    title: Yup.string().required('Title is required'),
    description: Yup.string().required('Description is required'),
    date: Yup.date().required('The meetup date is required'),
    location: Yup.string().required('Location is required'),
  });

  /**
   * Updates or creates a new meetup
   */
  function handleSubmit(meetupData) {
    if (meetup) {
      dispatch(updateMeetupRequest({ ...meetupData, id: meetup.id }));
      return;
    }
    dispatch(newMeetupRequest(meetupData));
  }

  return (
    <Container>
      <Form
        initialData={meetup}
        schema={schema}
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <BannerInput />

        <Input className="title" name="title" placeholder="Meetup title" />
        <Input
          className="description"
          name="description"
          placeholder="Meetup description"
          multiline
          maxLength={255}
        />

        <DatepickerInput name="date" selectedDate={meetup && meetup.date} />
        <Input className="location" name="location" placeholder="Location" />

        <button className="submit-btn" type="submit">
          {loading ? (
            <Loader>
              <FaSpinner size={18} />
            </Loader>
          ) : (
            <>
              <MdAddCircleOutline size={20} />
              <span>Save Meetup</span>
            </>
          )}
        </button>
      </Form>
    </Container>
  );
}

New.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      meetup: PropTypes.shape({
        id: PropTypes.number,
        date: PropTypes.string,
      }),
    }),
  }).isRequired,
};
