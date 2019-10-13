import { all, call, takeLatest, put } from 'redux-saga/effects';

import { toast } from 'react-toastify';
import history from '~/services/history';
import api from '~/services/api';
import { signFailure, signInSuccess, signUpSuccess } from './actions';

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

    yield put(signUpSuccess());

    toast.success(
      `✅ Congratulations ${name} your account was successfully created.`
    );

    history.push('/');
  } catch (e) {
    yield put(signFailure());

    const message = e.response
      ? `💩 ${e.response.data.error} 💩`
      : '💩 Unexpected error while trying to subscribe, please try again! 💩';

    toast.error(message);
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
  } catch (e) {
    yield put(signFailure());

    const message = e.response
      ? `💩 ${e.response.data.error} 💩`
      : '💩 Unexpected error please try again! 💩';

    toast.error(message);
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
