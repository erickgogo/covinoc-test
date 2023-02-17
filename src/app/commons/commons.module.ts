import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandHeaderComponent } from './brand-header/brand-header.component';



@NgModule({
  declarations: [BrandHeaderComponent],
  imports: [
    CommonModule
  ],
  exports:[
    BrandHeaderComponent
  ]
})
export class CommonsModule { }
