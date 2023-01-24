import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './module/home-page/home/home.component';
import { LoginFormComponent } from './module/home-page/login-form/login-form.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "user", component: LoginFormComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
