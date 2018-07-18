import { AUTH_USER, UNAUTH_USER, AUTH_ERROR, FETCH_MESSAGE } from '../actions/types';

const INITIAL_STATE = {
  authenticated: false,
  errorMessage: '',
  message: '',
};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case AUTH_USER:
      return { ...state, authenticated: true };
    case AUTH_ERROR:
      return { ...state, error: action.payload }
    case FETCH_MESSAGE:
      return { ...state, message: action.payload }
  }

  return state;
}