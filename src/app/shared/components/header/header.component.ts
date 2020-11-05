import { Component, OnInit } from '@angular/core';
import { faPlayCircle } from '@fortawesome/free-regular-svg-icons';
import { faSignOutAlt, faUser, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public logoIcon: IconDefinition = faPlayCircle;
  public userIcon: IconDefinition = faUser;
  public logOffIcon: IconDefinition = faSignOutAlt;

}
