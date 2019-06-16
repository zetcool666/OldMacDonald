import { NgModule } from '@angular/core';


import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CustomComponent } from './custom.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    
    RouterModule.forChild([
    { path: 'custom', component: CustomComponent }
    ])
  ],
  declarations: [
      CustomComponent
  ]
})
export class CustomModule { }