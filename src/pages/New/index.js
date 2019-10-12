import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { MdAddCircleOutline } from 'react-icons/md';
import * as Yup from 'yup';

import { newMeetupRequest } from '~/store/modules/meetup/actions';
import BannerInput from './components/BannerInput/index';
import DatepickerInput from './components/DatepickerInput/index';
import { Container } from './styles';

export default function New() {
  const dispatch = useDispatch();

  const schema = Yup.object({
    file_id: Yup.string().required('Banner is required'),
    title: Yup.string().required('Title is required'),
    description: Yup.string().required('Description is required'),
    date: Yup.date().required('The meetup date is required'),
    location: Yup.string().required('Location is required'),
  });

  function handleSubmit(meetup) {
    dispatch(newMeetupRequest(meetup));
  }
  return (
    <Container>
      <Form schema={schema} onSubmit={handleSubmit} autoComplete="off">
        <BannerInput name="file_id" />

        <Input className="title" name="title" placeholder="Meetup title" />
        <Input
          className="description"
          name="description"
          placeholder="Meetup description"
          multiline
          maxLength={255}
        />

        <DatepickerInput name="date" />
        <Input className="location" name="location" placeholder="Location" />

        <button className="submit-btn" type="submit">
          <MdAddCircleOutline size={20} />
          Save Meetup
        </button>
      </Form>
    </Container>
  );
}
