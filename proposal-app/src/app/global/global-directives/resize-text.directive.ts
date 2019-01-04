import { Directive, HostListener, OnInit, ElementRef, Input } from '@angular/core';

interface sizeBreak {
  breakPoint: number;
  fontSize: string;
}

@Directive({
  selector: '[appResizeText]'
})
export class ResizeTextDirective {
  @Input() sizeBreaks: sizeBreak[];
  windowWidth: number;
  origFontSize: number;

  constructor(private el: ElementRef) { }


  ngOnInit() {
    this.origFontSize = this.el.nativeElement.style.fontSize;
    this.windowWidth = window.innerWidth || document.body.clientWidth;
    this.sizeBreaks.sort(compareSizeBreaks);
    this.setFontSize()
  }

  @HostListener('window:resize')
  onResize() {
    this.windowWidth = window.innerWidth || document.body.clientWidth;
    this.setFontSize()
  }

  setFontSize() {
    let inBreakpointSize: boolean = false;
    // Start from smallest break point
    for (let sb of this.sizeBreaks) {
      if (this.windowWidth < sb.breakPoint) {
        this.el.nativeElement.style.fontSize = sb.fontSize;
        inBreakpointSize = true;
        break;
      }
    }

    if (!inBreakpointSize) {
      // Not within range of breakpoint sizes, therefore set to original font size
      this.el.nativeElement.style.fontSize = this.origFontSize;
    }
  }

}


function compareSizeBreaks(a: sizeBreak, b: sizeBreak): number {
  if (a.breakPoint > b.breakPoint) {
    return 1;
  }
  if (a.breakPoint < b.breakPoint) {
    return -1
  }

  return 0;
}
