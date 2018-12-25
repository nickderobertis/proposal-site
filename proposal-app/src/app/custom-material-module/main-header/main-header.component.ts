import { Component, OnInit, Input } from '@angular/core';

interface NavItem {
  displayStr: string;
  pageRef: string;
}

export interface HeaderOptions {
  navItems: NavItem[];
}

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {
  @Input() options: HeaderOptions;

  constructor() { }

  ngOnInit() {
    console.log(this.options);
    if (typeof this.options === "undefined") {
      this.options = {navItems: []};
    }
    console.log(this.options);
  }

}
