import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild
} from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-video-editor',
  templateUrl: './video-editor.component.html',
  styleUrls: ['./video-editor.component.scss']
})
export class VideoEditorComponent implements OnInit, AfterViewInit {

  @ViewChild('inputFile') inputFile!: ElementRef<HTMLInputElement>;
  @ViewChild('frames_container') frames_container!: ElementRef<HTMLDivElement>
  @ViewChild('frames_arr_cont') frames_arr_cont!: ElementRef<HTMLDivElement>;
  @ViewChild('playableVideo') playableVideo!: ElementRef<HTMLVideoElement>
  frames = [];
  videoLoaded = false;
  constructor(
    private _renderer: Renderer2
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {

  }
  videoUploadHandle(event: any): void {
    const { files } = event.currentTarget;
    console.log(event.currentTarget, 'video added');
    //
    this.videoLoaded = true;
    debugger;
    this.playableVideo.nativeElement.src = URL.createObjectURL(files[0])
    this.playableVideo.nativeElement.controls = false;
    of([])
      .pipe(delay(900))
      .subscribe(_ => {
        this.playableVideo.nativeElement.play();
        console.log(this.playableVideo.nativeElement.duration, 'video reference');
      })
    setTimeout(() => {
      this.createDynamicFrames(this.playableVideo.nativeElement.duration);
    }, 7000)
  }

  createCanvasElement(width = 640, height = 480): HTMLCanvasElement {
    const canvas = this._renderer.createElement('svg');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    return ctx;
  }

  createDynamicFrames(duration: number) {
    const length = +duration.toFixed(0);
    this.playableVideo.nativeElement.onprogress = (e) => {
      console.log(e, 'progressing');
    }
    // for (let i = 0; i < length; i++) {
    //   const ctx: any = this.createCanvasElement();
    //   ctx.drawImage(this.videoElement, 0, 0, ctx.width, ctx.height);

    // }
  }

}
