import { Component, OnInit } from '@angular/core';
import { HeaderOptions } from '../custom-material-module/main-header/main-header.component';
import { landingHeaderOptions } from './header-links';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  landingHeaderOptions: HeaderOptions = landingHeaderOptions;
  constructor() { }

  ngOnInit() {
  }

}
