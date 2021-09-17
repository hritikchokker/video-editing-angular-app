import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoEditorModule } from './video-editor/video-editor.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    VideoEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
