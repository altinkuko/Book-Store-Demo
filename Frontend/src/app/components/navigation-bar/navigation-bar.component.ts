import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../service/authentication.service";

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  constructor( public authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }

}
