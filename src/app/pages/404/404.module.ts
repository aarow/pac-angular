import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundPage } from "./404.component";

const appRoutes: Routes = [
    { path: '', component: PageNotFoundPage }
];

@NgModule({
  declarations: [
    PageNotFoundPage
  ],
  imports: [RouterModule.forChild(appRoutes)],
  providers: [],
  bootstrap: []
})
export class PageNotFoundPageModule { }
