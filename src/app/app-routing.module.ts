import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessComponent } from './business/business.component';
import { SportsComponent } from './sports/sports.component';
import { TechnologyComponent } from './technology/technology.component';
import { TopHeadingComponent } from './top-heading/top-heading.component';

const routes: Routes = [
  {
    path:'',
    component:TopHeadingComponent
  },
  {
    path:'tech',
    component:TechnologyComponent
  },
  {
    path:'Business',
    component:BusinessComponent
  },
  {
    path:'sports',
    component:SportsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
