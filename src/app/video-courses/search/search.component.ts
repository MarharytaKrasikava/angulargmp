import { Component, EventEmitter, Output } from '@angular/core';
import { faSearch, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  @Output() public filterValueSet: EventEmitter<string> = new EventEmitter<string>();
  public searchIcon: IconDefinition = faSearch;

  public inputValue: string = '';

  public onClick(): void {
    this.filterValueSet.emit(this.inputValue);
  }

}
