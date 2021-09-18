import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoEditorComponent } from './video-editor.component';
import { VideoHandlerDirective } from './video-handler.directive';



@NgModule({
  declarations: [
    VideoEditorComponent,
    VideoHandlerDirective
  ],
  imports: [
    CommonModule
  ], exports: [VideoEditorComponent]
})
export class VideoEditorModule { }
