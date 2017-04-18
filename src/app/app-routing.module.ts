import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageModule } from "./pages/home/home.module";
import { PageNotFoundPageModule } from "./pages/404/404.module";


const appRoutes: Routes = [
    { path: 'home', loadChildren: "./pages/home/home.module#HomePageModule"  },
    { path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    { path: '404', loadChildren: "./pages/404/404.module#PageNotFoundPageModule"  },
    {
        path: '**',
        redirectTo: '404'
    }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
      RouterModule
  ]
})
export class AppRoutingModule { }