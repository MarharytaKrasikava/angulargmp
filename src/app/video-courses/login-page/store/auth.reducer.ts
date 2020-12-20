import { UserInfo } from 'src/app/shared/models/userInfo.model';
import * as AuthActions from './auth.actions';

export interface State {
  userInfo: UserInfo;
}

const initialState: State = {
  userInfo: null,
};

export function authReducer(
  state: State = initialState,
  action: AuthActions.AuthActions
) {
  switch (action.type) {
    case AuthActions.LOGIN:
      return {
        ...state,
        userInfo: action.payload,
      };
    case AuthActions.LOGOUT:
      return {
        ...state,
        userInfo: null,
      };
    default:
      return state;
  }
}
