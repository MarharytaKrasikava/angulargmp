import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchIcon = faSearch;

  inputValue = '';

  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void {
    console.log(this.inputValue);
  }

}
