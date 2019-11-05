import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GitsearchComponent} from './gitsearch/gitsearch.component'


const routes: Routes = [{path:'gitsearch',component:GitsearchComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
