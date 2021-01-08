import {
  Component,
  Input,
  OnInit,
  ViewChild,
  ElementRef,
  OnDestroy,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Author } from 'src/app/shared/models';
import { AuthorsService } from 'src/app/shared/services/authors.service';
import { AppState } from 'src/app/store/app.reducer';
import * as AuthorsActions from './store/authors.actions';

@Component({
  selector: 'app-authors-input',
  templateUrl: './authors-input.component.html',
  styleUrls: ['./authors-input.component.css'],
})
export class AuthorsInputComponent implements OnInit, OnDestroy, OnChanges {
  private storeSubscription: Subscription;
  @Input() public selectedAuthors: Author[];
  @ViewChild('authorsInput') public authorsInput: ElementRef;
  public possibleAuthors: Author[];
  public selected: string;

  constructor(
    private authorsService: AuthorsService,
    private store: Store<AppState>
  ) {}

  public ngOnInit(): void {
    this.authorsService.getAuthors().subscribe((authors) => {
      if (authors) {
        this.possibleAuthors = authors;
      }
    });
    this.storeSubscription = this.store
      .select('authors')
      .pipe(map((authorsState) => authorsState.authors))
      .subscribe((authors: Author[]) => {
        this.selectedAuthors = authors;
      });
  }

  public changeValue(newAuthor: string): void {
    if (newAuthor) {
      this.store.dispatch(
        new AuthorsActions.AddAuthor(
          this.possibleAuthors.find((author) => author.name === newAuthor)
        )
      );
    }
    this.authorsInput.nativeElement.value = '';
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (
      changes.selectedAuthors.currentValue?.length &&
      changes.selectedAuthors.currentValue.length !==
        changes.selectedAuthors.previousValue.length
    ) {
      this.store.dispatch(
        new AuthorsActions.SetAuthors(changes.selectedAuthors.currentValue)
      );
    }
  }

  public ngOnDestroy(): void {
    this.storeSubscription.unsubscribe();
  }
}
