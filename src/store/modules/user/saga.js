import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { format, parseISO } from 'date-fns';

import { getMeetUpsSuccess, getMeetUpsFailure } from './actions';
import api from '~/services/api';

export function* getMeetups() {
  try {
    const response = yield call(api.get, 'meetups/organizer');
    const meetups = response.data.map(meetup => ({
      ...meetup,
      formattedDate: format(parseISO(meetup.date), "MMMM d, 'at 'hh:mm b"),
    }));
    yield put(getMeetUpsSuccess(meetups));
  } catch (e) {
    yield put(getMeetUpsFailure());
    const message = e.response
      ? `💩 ${e.response.data.error} 💩`
      : '💩 Error while trying to retrieve user meetups, please try again later 💩';

    toast.error(message);
  }
}

export default all([takeLatest('@user/GET_MEET_UP_REQUEST', getMeetups)]);
