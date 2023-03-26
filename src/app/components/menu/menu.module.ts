import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './menu.component';
import { ImageModule } from 'primeng/image';



@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    ImageModule
  ],
  exports: [
    MenuComponent
  ]
})
export class MenuModule { }
