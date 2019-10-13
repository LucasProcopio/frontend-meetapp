export function deleteMeetupRequest(meetupId) {
  return {
    type: '@meetup/DELETE_REQUEST',
    payload: { meetupId },
  };
}

export function deleteMeetupFailure() {
  return {
    type: '@meetup/DELETE_FAILURE',
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

export function newMeetupSuccess() {
  return {
    type: '@meetup/NEW_MEETUP_SUCCESS',
  };
}

export function newMeetupFailure() {
  return {
    type: '@meetup/NEW_MEETUP_FAILURE',
  };
}

export function updateMeetupRequest(meetup) {
  return {
    type: '@meetup/UPDATE_MEETUP_REQUEST',
    payload: { meetup },
  };
}

export function updateMeetupSuccess() {
  return {
    type: '@meetup/UPDATE_MEETUP_SUCCESS',
  };
}

export function updateMeetupFailure() {
  return {
    type: '@meetup/UPDATE_MEETUP_FAILURE',
  };
}
