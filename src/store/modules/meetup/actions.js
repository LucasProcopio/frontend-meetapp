export function deleteMeetupRequest(meetupId) {
  return {
    type: '@meetup/DELETE_REQUEST',
    payload: { meetupId },
  };
}

export function deleteMeetupFailure() {
  return {
    type: '@meetup/DELETE_FAILED',
  };
}

export function deleteMeetupSuccess(meetupId) {
  return {
    type: '@meetup/DELETE_SUCCESS',
    payload: { meetupId },
  };
}
