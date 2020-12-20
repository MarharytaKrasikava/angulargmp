import { Action } from '@ngrx/store';
import { UserInfo } from 'src/app/shared/models/userInfo.model';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export class Login implements Action {
  public readonly type = LOGIN;

  constructor(public payload: UserInfo) {}
}

export class Logout implements Action {
  public readonly type = LOGOUT;
}

export type AuthActions = Login | Logout;
