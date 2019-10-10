import { all, call, takeLatest, put } from 'redux-saga/effects';

import { toast } from 'react-toastify';
import history from '~/services/history';
import api from '~/services/api';
import { signFailure, signInSuccess } from './actions';

/**
 * Subscribe user
 */
export function* signUp({ payload }) {
  try {
    const { name, email, password } = payload;
    yield call(api.post, 'users', {
      name,
      email,
      password,
      provider: true,
    });

    history.push('/');
  } catch (error) {
    yield put(signFailure());
    toast.error(
      '💩 Error while trying to subscribe, please make sure you enter your data correctly 💩'
    );
  }
}

/**
 * User login
 */
export function* signIn({ payload }) {
  try {
    const { email, password } = payload;
    const response = yield call(api.post, 'session', {
      email,
      password,
    });

    const { token, user } = response.data;

    /**
     * Verify if user is a provider
     */
    if (!user.provider) {
      toast.error('💩 User is not a provider 💩');
      return;
    }

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, user));
    history.push('/dashboard');
  } catch (error) {
    yield put(signFailure());
    toast.error('💩 E-mail and or Password incorrect 💩');
  }
}

/**
 * Set auth token as default for api calls
 */
export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
]);
