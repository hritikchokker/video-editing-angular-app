import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostListener,
  OnChanges
} from '@angular/core';

@Directive({
  selector: '[appVideoHandler]'
})
export class VideoHandlerDirective implements AfterViewInit, OnChanges {

  constructor(
    private _el: ElementRef<HTMLVideoElement>
  ) { }

  @HostListener('timeupdate', ['$event', '$event.target'])
  onVideoSeeked(event: any, target: any) {
    // console.log(event, 'event');
  }

  ngOnChanges(): void {
    console.log(this._el, 'using directive');
  }

  ngAfterViewInit(): void {


  }

}
