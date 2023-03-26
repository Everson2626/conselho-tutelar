import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioComponent } from './formulario.component';
import { CardModule } from 'primeng/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FieldsetModule } from 'primeng/fieldset';
import { InputTextModule } from 'primeng/inputtext';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FileUploadModule } from 'primeng/fileupload';
import { HttpClientModule } from '@angular/common/http';
import { FirebaseService } from 'src/app/services/firebase.service';
import { TabMenuModule } from 'primeng/tabmenu';
import { DropdownModule } from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [
    FormularioComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    ReactiveFormsModule,
    FieldsetModule,
    InputTextModule,
    FlexLayoutModule,
    FileUploadModule,
    HttpClientModule,
    TabMenuModule,
    FormsModule,
    DropdownModule,
    BrowserAnimationsModule,
    ToastModule
  ],
  exports: [
    FormularioComponent
  ],
  providers: [
    FirebaseService,
    MessageService
  ]
})
export class FormularioModule { }
