import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './Home/home.component';
import { VulAnalysisComponent } from './Analysis/vulnerability-analysis.component';
import { Top20Component } from './Top20/top20.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'top20', component: Top20Component },
  { path: 'analysis', component: VulAnalysisComponent }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
