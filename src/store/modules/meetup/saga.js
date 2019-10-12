import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';
import history from '~/services/history';
import {
  deleteMeetupFailure,
  deleteMeetupSuccess,
  newMeetupSuccess,
  newMeetupFailure,
} from './actions';

/**
 * Delete Meetapp
 */
export function* delMeetup({ payload }) {
  try {
    const { meetupId } = payload;

    yield call(api.delete, `meetups/${meetupId}`);

    toast.success('✅ Meetup successfully deleted');

    yield put(deleteMeetupSuccess(meetupId));

    history.push('/dashboard');
  } catch (error) {
    toast.error(
      '💩 Error while trying to delete the meetup, please try again 💩'
    );
    yield put(deleteMeetupFailure());
  }
}

export function* newMeetup({ payload }) {
  try {
    const { meetup } = payload;
    console.tron.log(meetup.file_id);
    yield call(api.post, 'meetups', { ...meetup });

    toast.success('✅ Meetup successfully created');

    put(newMeetupSuccess(meetup));

    history.push('/dashboard');
  } catch (error) {
    toast.error(
      '💩 Error while trying to create a new meetup, please try again 💩'
    );
    yield put(newMeetupFailure());
  }
}

export default all([
  takeLatest('@meetup/DELETE_REQUEST', delMeetup),
  takeLatest('@meetup/NEW_MEETUP_REQUEST', newMeetup),
]);
