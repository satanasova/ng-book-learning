import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoggedInGuard } from './logged-in.guard';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { ProtectedComponent } from './protected/protected.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'contactus', redirectTo: 'contact'},
  {path: 'product/:id', component: ProductComponent},
  { path: 'login', component: LoginComponent },
  {path: 'protected', component: ProtectedComponent, canActivate: [ LoggedInGuard ]}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
