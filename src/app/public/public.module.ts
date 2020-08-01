import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {PublicComponent} from './public.component';
import {DrugComponent} from './drug/drug.component';
import {RouterModule} from '@angular/router';
import {NavComponent} from './nav/nav.component';
import {HomeComponent} from './home/home.component';

let routes = [
  {
    path: '',
    component: PublicComponent,
    children: [
      {path: '', component: HomeComponent}
    ]
  }
];

@NgModule({
  declarations: [PublicComponent,
    DrugComponent,
    NavComponent,
    HomeComponent],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forChild(routes)
  ]
})
export class PublicModule {
}
