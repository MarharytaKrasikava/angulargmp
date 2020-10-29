import { Component, OnInit } from '@angular/core';
import { faSearch, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public searchIcon: IconDefinition = faSearch;

  public inputValue: string = '';

  public onClick(): void {
    console.log(this.inputValue);
  }

}
