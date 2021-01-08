import { Component, EventEmitter, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import * as AuthorsActions from '../store/authors.actions';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css'],
})
export class AuthorComponent {
  @Input() public name: string;
  public authorRemoved: EventEmitter<string> = new EventEmitter();

  constructor(private store: Store<AppState>) {}

  public removeAuthor(): void {
    this.store.dispatch(new AuthorsActions.RemoveAuthor(this.name));
  }
}
