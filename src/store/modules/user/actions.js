export function getMeetUpsRequest() {
  return {
    type: '@user/GET_MEET_UP_REQUEST',
  };
}

export function getMeetUpsSuccess(meetups) {
  return {
    type: '@user/GET_MEET_UP_SUCCESS',
    payload: { meetups },
  };
}

export function getMeetUpsFailure() {
  return {
    type: '@user/GET_MEET_UP_FAILURE',
  };
}

export function logOut() {
  return {
    type: '@user/LOGOUT',
  };
}
