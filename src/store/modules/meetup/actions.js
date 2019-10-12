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

export function newMeetupRequest(meetup) {
  return {
    type: '@meetup/NEW_MEETUP_REQUEST',
    payload: { meetup },
  };
}

export function newMeetupSuccess(meetup) {
  return {
    type: '@meetup/NEW_MEETUP_SUCCESS',
    payload: { meetup },
  };
}

export function newMeetupFailure() {
  return {
    type: '@meetup/NEW_MEETUP_FAILURE',
  };
}
