import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GenderComponent} from './gender/gender.component';
import {Gender2Component} from './gender2/gender2.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent  },
  { path: 'gender/:genderName', component: GenderComponent },
  { path: 'gender2', component: Gender2Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
