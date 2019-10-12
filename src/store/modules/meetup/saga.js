import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';
import history from '~/services/history';
import { deleteMeetupFailure, deleteMeetupSuccess } from './actions';

export function* delMeetup({ payload }) {
  try {
    const { meetupId } = payload;
    yield call(api.delete, `meetups/${meetupId}`);
    toast.success('✅ Meetup successfully deleted');
    yield put(deleteMeetupSuccess(meetupId));
    history.push('/dashboard');
  } catch (error) {
    yield put(deleteMeetupFailure());
  }
}
export default all([takeLatest('@meetup/DELETE_REQUEST', delMeetup)]);
