import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './components/loader/loader.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LoaderComponent],
  exports: [LoaderComponent, RouterModule]
})
export class SharedModule { }
