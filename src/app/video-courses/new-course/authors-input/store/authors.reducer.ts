import { Author } from 'src/app/shared/models';
import * as AuthorsActions from './authors.actions';

export interface State {
  authors: Author[];
}

const initialState: State = {
  authors: [],
};

export function authorsReducer(
  state: State = initialState,
  action: AuthorsActions.AuthorsActions
): State {
  switch (action.type) {
    case AuthorsActions.SET_AUTHORS:
      return {
        ...state,
        authors: action.payload as Author[],
      };

    case AuthorsActions.ADD_AUTHOR:
      return {
        ...state,
        authors: [...state.authors, action.payload as Author],
      };

    case AuthorsActions.REMOVE_AUTHOR:
      const index: number = state.authors.findIndex(
        (author) => author.name === action.payload
      );
      const updatedAuthors: Author[] = state.authors.slice(0);
      updatedAuthors.splice(index, 1);
      return {
        ...state,
        authors: [...updatedAuthors],
      };

    default:
      return state;
  }
}
