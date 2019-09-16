
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddClientComponent } from './add-client/add-client.component';
import { AddResourceComponent } from './add-resource/add-resource.component';
import { DeleteClientComponent } from './delete-client/delete-client.component';
import { DeleteResourceComponent } from './delete-resource/delete-resource.component';
import { AddClientScopesComponent } from './add-client-scopes/add-client-scopes.component';
import { AddClientRedirectUrisComponent } from './add-client-redirect-uris/add-client-redirect-uris.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '',
  component: HomeComponent },
  { path: 'home',
  component: HomeComponent },
  { path: 'addClient',
  component: AddClientComponent },
  { path: 'addResource',
  component: AddResourceComponent },
  { path: 'deleteClient',
  component: DeleteClientComponent },
  { path: 'deleteResource',
  component: DeleteResourceComponent },
  { path: 'addClientScopes',
  component: AddClientScopesComponent },
  { path: 'addClientRedirectUris',
  component: AddClientRedirectUrisComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
