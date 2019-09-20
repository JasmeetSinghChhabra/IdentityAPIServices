import { RedirectComponent } from './redirect/redirect.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddClientComponent } from './add-client/add-client.component';
import { AddResourceComponent } from './add-resource/add-resource.component';
import { DeleteClientComponent } from './delete-client/delete-client.component';
import { DeleteResourceComponent } from './delete-resource/delete-resource.component';
import { AddClientScopesComponent } from './add-client-scopes/add-client-scopes.component';
import { AddClientRedirectUrisComponent } from './add-client-redirect-uris/add-client-redirect-uris.component';
import { HomeComponent } from './home/home.component';
import { AuthCallbackComponent } from './auth-callback/auth-callback.component';
import { AuthGuard } from './core/authentication/auth.guard';
import { LoginComponent } from './account/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'redirect', pathMatch: 'full' },
  { path: 'auth-callback', component: AuthCallbackComponent  },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'redirect', component: RedirectComponent },
  { path: 'addClient',  component: AddClientComponent , canActivate: [AuthGuard]  },
  { path: 'addResource',  component: AddResourceComponent, canActivate: [AuthGuard]  },
  { path: 'deleteClient',  component: DeleteClientComponent , canActivate: [AuthGuard] },
  { path: 'deleteResource',  component: DeleteResourceComponent , canActivate: [AuthGuard] },
  { path: 'addClientScopes',  component: AddClientScopesComponent , canActivate: [AuthGuard] },
  { path: 'addClientRedirectUris',   component: AddClientRedirectUrisComponent , canActivate: [AuthGuard] },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
