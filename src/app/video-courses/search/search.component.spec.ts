import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let courseHtml: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FontAwesomeModule, FormsModule],
      declarations: [SearchComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    courseHtml = fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit correct filter value', () => {
    let actualValue: string;
    component.filterValueSet.subscribe((value: string) => {
      actualValue = value;
    });
    const searchButton: HTMLButtonElement = courseHtml.querySelector('.search__button');
    const input: HTMLInputElement = courseHtml.querySelector('input');
    fixture.detectChanges();
    input.value = 'test value';
    input.dispatchEvent(new Event('input'));
    searchButton.click();
    expect(actualValue).toBe('test value');
  });
});
