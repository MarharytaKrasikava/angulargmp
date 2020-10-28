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

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FontAwesomeModule, FormsModule],
      declarations: [SearchComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should log input value into console', () => {
    spyOn(console, 'log');
    const input = fixture.debugElement.nativeElement.querySelector('input');
    const button = fixture.debugElement.nativeElement.querySelector('button');
    fixture.detectChanges();
    input.value = 'test value';
    input.dispatchEvent(new Event('input'));
    button.click();
    expect(console.log).toHaveBeenCalledWith('test value');
  });
});
