import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main-banner',
  templateUrl: './main-banner.component.html',
  styleUrls: ['./main-banner.component.css']
})
export class MainBannerComponent implements OnInit {
  @Input() imageUrl: string;
  @Input() titleStr: string;

  constructor() { }

  ngOnInit() {
  }

}
