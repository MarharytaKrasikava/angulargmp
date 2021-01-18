import {
  Component,
  Input,
  OnInit,
  ViewChild,
  ElementRef,
  OnDestroy,
  OnChanges,
  SimpleChanges,
  forwardRef,
  Output,
  EventEmitter,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Author } from 'src/app/shared/models';
import { AuthorsService } from 'src/app/shared/services/authors.service';
import { AppState } from 'src/app/store/app.reducer';
import * as AuthorsActions from './store/authors.actions';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-authors-input',
  templateUrl: './authors-input.component.html',
  styleUrls: ['./authors-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AuthorsInputComponent),
      multi: true,
    },
  ],
})
export class AuthorsInputComponent implements ControlValueAccessor, OnInit, OnDestroy, OnChanges {
  private storeSubscription: Subscription;
  @Input() public selectedAuthors: Author[];
  @Output() public authorsSelected: EventEmitter<Author[]> = new EventEmitter();
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
        this.onChange(authors);
        this.onTouched();
        this.authorsSelected.emit(authors);
      });
  }

  public onChange = (value: any) => {};
  public onTouched = () => {};

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

  public writeValue(value: Author[]): void {}

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
