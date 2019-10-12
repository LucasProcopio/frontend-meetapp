import produce from 'immer';

const INITIAL_STATE = {
  profile: null,
  meetups: [],
  loading: false,
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_SUCCESS': {
        draft.profile = action.payload.user;
        break;
      }
      case '@user/GET_MEET_UP_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@user/GET_MEET_UP_SUCCESS': {
        draft.loading = false;
        draft.meetups = action.payload.meetups;
        break;
      }
      case '@user/GET_MEET_UP_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@user/LOGOUT': {
        draft.profile = null;
        draft.meetups = [];
        break;
      }
      case '@meetup/DELETE_SUCCESS': {
        draft.meetups = draft.meetups.filter(
          meetup => meetup.id !== action.payload.meetupId
        );
        break;
      }
      default:
    }
  });
}
