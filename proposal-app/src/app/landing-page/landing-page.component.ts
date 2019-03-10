import { Component, OnInit, HostListener } from '@angular/core';
import { HeaderOptions } from '../custom-material-module/main-header/main-header.component';
import { landingHeaderOptions } from './header-links';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  landingHeaderOptions: HeaderOptions = landingHeaderOptions;
  windowWidth: number;
  autoplaySong: boolean = false;
  constructor( ) { }

  ngOnInit() {
    this.windowWidth = window.innerWidth || document.body.clientWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.windowWidth = window.innerWidth || document.body.clientWidth;
  }

  get sweetImageWidth(): string {
    if (this.windowWidth < 600) {
      return '100%';
    }
    if (this.windowWidth < 750) {
      return '75%';
    }
    if (this.windowWidth < 1200) {
      return '50%';
    }
    else {
      return '35%';
    }
  }


}
