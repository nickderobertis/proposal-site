import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-play-button',
  templateUrl: './play-button.component.html',
  styleUrls: ['./play-button.component.css']
})
export class PlayButtonComponent implements OnInit {
  @Input() scrollSpeed: number = 10;
  private scrollRef: number;
  private isScrolling: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    if (this.isScrolling) {
      this.stopScroll();
    }
    else {
      this.startAutoScroll();
    }
  }

  startAutoScroll() {
    this.scrollRef = setInterval(pageScroll, this.scrollSpeed);
    this.isScrolling = true;
  }

  stopScroll() {
    clearInterval(this.scrollRef);
    this.isScrolling = false;
  }



}

function pageScroll() {
  window.scrollBy(0,1)
}

