import { Action } from '@ngrx/store';
import { Author } from 'src/app/shared/models';

export const SET_AUTHORS: string = 'SET_AUTHORS';
export const ADD_AUTHOR: string = 'ADD_AUTHOR';
export const REMOVE_AUTHOR: string = 'REMOVE_AUTHOR';

export class SetAuthors implements Action {
  public readonly type: string = SET_AUTHORS;

  constructor(public payload: Author[]) {}
}

export class AddAuthor implements Action {
  public readonly type: string = ADD_AUTHOR;

  constructor(public payload: Author) {}
}

export class RemoveAuthor implements Action {
  public readonly type: string = REMOVE_AUTHOR;

  constructor(public payload: string) {}
}

export type AuthorsActions = SetAuthors | AddAuthor | RemoveAuthor;
