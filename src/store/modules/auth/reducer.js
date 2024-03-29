import produce from 'immer';

const INITIAL_STATE = {
  token: null,
  signed: false,
  loading: false,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_UP_REQUEST':
      case '@auth/SIGN_IN_REQUEST': {
        draft.loading = true;
        break;
      }

      case '@auth/SIGN_IN_SUCCESS': {
        draft.signed = true;
        draft.token = action.payload.token;
        draft.loading = false;
        break;
      }
      case '@auth/SIGN_UP_SUCCESS':
      case '@auth/SIGN_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@user/LOGOUT': {
        draft.signed = false;
        draft.token = null;
        break;
      }
      default:
    }
  });
}
