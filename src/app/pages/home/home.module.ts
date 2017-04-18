import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePage } from "./home.component";

const appRoutes: Routes = [
    { path: '', component: HomePage }
];

@NgModule({
  declarations: [
    HomePage
  ],
  imports: [RouterModule.forChild(appRoutes)],
  providers: [],
  bootstrap: []
})
export class HomePageModule { }
