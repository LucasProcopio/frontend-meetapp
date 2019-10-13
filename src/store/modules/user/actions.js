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

export function updateUserRequest(user) {
  return {
    type: '@user/UPDATE_REQUEST',
    payload: { user },
  };
}

export function updateUserSuccess(user) {
  return {
    type: '@user/UPDATE_SUCCESS',
    payload: { user },
  };
}

export function updateUserFailure() {
  return {
    type: '@user/UPDATE_FAILURE',
  };
}

export function logOut() {
  return {
    type: '@user/LOGOUT',
  };
}
