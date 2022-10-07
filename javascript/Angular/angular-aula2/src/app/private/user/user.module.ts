import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { HttpClientModule } from '@angular/common/http'

const routes: Routes = [
  {path: '', component: ListComponent},
  {path: 'new', component: FormComponent},
  {path: 'novo', component: FormComponent},
  {path: ':id', component: FormComponent}
];

@NgModule({
  declarations: [
    ListComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule
  ]
})
export class UserModule { }
