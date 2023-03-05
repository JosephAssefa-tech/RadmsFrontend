import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { AccidentDetailsComponent } from './components/accident-details/accident-details.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'accident',component:AccidentDetailsComponent},
  {path:'about',component:AboutComponent},
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
