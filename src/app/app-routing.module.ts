import { AutomovilComponent } from './automovil/automovil.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';

const routes: Routes = [

  { path: 'automovil', component: AutomovilComponent }
  
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class AppRoutingModule { }
