import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoEditorComponent } from './video-editor.component';



@NgModule({
  declarations: [
    VideoEditorComponent
  ],
  imports: [
    CommonModule
  ], exports: [VideoEditorComponent]
})
export class VideoEditorModule { }
