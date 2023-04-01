import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { AccidentDetailsComponent } from './components/accident-details/accident-details.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RegionComponent } from './components/region/region.component';
import { SideMenuPageComponent } from './components/side-menu-page/side-menu-page.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';

const routes: Routes = [
   //{ path: '', pathMatch: 'full', redirectTo: '/welcome' },
 // {path: '', redirectTo: '/login', pathMatch: 'full'},
 { path: '', pathMatch: 'full', redirectTo: '/login' },
 { path: '',component:LoginComponent },
  { path: 'login',component:LoginComponent },
  { path: 'side',component:SideMenuPageComponent },
  {path:'home',component:HomeComponent},
  {path:'accident',component:AccidentDetailsComponent},
  {path:'about',component:AboutComponent},
  {path:'welcome',component:WelcomeComponent},
  {path:'region',component:RegionComponent},

 //{ path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
