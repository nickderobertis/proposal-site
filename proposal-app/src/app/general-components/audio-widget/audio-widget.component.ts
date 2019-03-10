import { Component, OnInit, OnChanges, Input, ElementRef, NgZone, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-audio-widget',
  templateUrl: './audio-widget.component.html',
  styleUrls: ['./audio-widget.component.css']
})
export class AudioWidgetComponent implements OnInit, OnChanges {
  @Input() source: string = '';
  @Input() autoplay: boolean = false;
  private startAudio: boolean = false;
  private shouldExist: boolean;

  constructor(
    private el: ElementRef,
    private ngZone: NgZone,
    private changeDetector: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.ngZone.runOutsideAngular(() => {
      window.addEventListener('scroll', this.onScroll, <any>{capture: true, passive: true});
    });
  }

  ngOnChanges() {
    this.shouldExist = !this.autoplay;
  }

  ngOnDestroy() {
    this.removeListener();
  }

  onScroll = (): void => {
    this.setStartAudio();
  };

  removeListener() {
    window.removeEventListener('scroll', this.onScroll, <any>{capture: true, passive: true});
    //unfortunately the compiler doesn't know yet about this object, so cast to any
  }

  setStartAudio() {
    if (this.startAudio) {
      // once it has started, no need to stop
      return
    }
    if (!this.autoplay) {
      // only needed for autoplay
      return
    }
    if (isElementInViewport(this.el)) {
      this.startAudio = true;
      this.shouldExist = true;
      this.changeDetector.detectChanges();
      this.removeListener();
    }
  }


  get sourceType(): string {
    if (this.source == '') {
      return '';
    }
    // Extract extension from file type
    let extensionIndex: number = this.source.lastIndexOf(".") + 1;
    let extension = this.source.slice(extensionIndex, this.source.length);
    return `audio/${extension}`;
  }


}

function isElementInViewport (el: ElementRef): boolean {

  var rect = el.nativeElement.getBoundingClientRect();

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
    rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
  );
}
