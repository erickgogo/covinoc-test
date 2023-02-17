import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { CrudComponent } from './crud/crud.component';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
@NgModule({
  declarations: [CrudComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    InputTextModule,
    PagesRoutingModule,
    CheckboxModule,
    ButtonModule,
    TableModule,
    
  ],
})
export class PagesModule {}
