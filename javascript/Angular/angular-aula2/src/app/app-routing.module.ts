import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guards';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path: '', component: IndexComponent},
  {
    path: 'app',
    canActivate: [AuthGuard],
    loadChildren: () => import('./private/private.module').then( m => m.PrivateModule)
  },
  {path: 'auth', component: LoginComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
