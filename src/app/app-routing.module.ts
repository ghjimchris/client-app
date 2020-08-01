import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PublicModule} from './public/public.module';
import {PublicComponent} from './public/public.component';

const routes: Routes = [
  {path: '#', component: PublicComponent},
  {path: '**', component: PublicComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), PublicModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
