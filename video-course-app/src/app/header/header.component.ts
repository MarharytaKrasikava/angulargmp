import { Component, OnInit } from '@angular/core';
import { faPlayCircle } from '@fortawesome/free-regular-svg-icons';
import { faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  logoIcon = faPlayCircle;
  userIcon = faUser;
  logOffIcon = faSignOutAlt;

  constructor() { }

  ngOnInit(): void {
  }

}
