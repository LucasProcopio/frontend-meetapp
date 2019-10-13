import produce from 'immer';

const INITIAL_STATE = {
  loading: false,
};

export default function meetup(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@meetup/NEW_MEETUP_REQUEST':
      case '@meetup/UPDATE_MEETUP_REQUEST':
      case '@meetup/DELETE_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@meetup/NEW_MEETUP_SUCCESS':
      case '@meetup/UPDATE_MEETUP_SUCCESS':
      case '@meetup/DELETE_SUCCESS': {
        draft.loading = false;
        break;
      }
      case '@meetup/NEW_MEETUP_FAILURE':
      case '@meetup/UPDATE_MEETUP_FAILURE':
      case '@meetup/DELETE_FAILURE': {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
