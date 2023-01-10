import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SiginComponent } from './sigin/sigin.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { WatchComponent } from './watch/watch.component';










const routes: Routes = [
    {path:'',redirectTo:'sigin',pathMatch:'full'},
    {path:'sigin',component:SiginComponent},
    {path:'home',component:HomeComponent},
    {path:'profile',component:ProfileComponent},
    {path:'watch',component:WatchComponent},
  
    




  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
