import { NgModule } from '@angular/core';


import { RouterModule } from '@angular/router';

import { SongComponent } from './song.component';
import { CommonModule } from '@angular/common';
import { CustomModule } from '../custom/custom.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    
    RouterModule.forChild([
    { path: 'song', component: SongComponent }
    ]),
    CustomModule
  ],
  declarations: [
      SongComponent
  ]
})
export class SongModule { }