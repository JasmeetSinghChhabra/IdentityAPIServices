import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddClientComponent } from './add-client/add-client.component';
import { AddResourceComponent } from './add-resource/add-resource.component';
import { DeleteClientComponent } from './delete-client/delete-client.component';

const routes: Routes = [
  { path: 'home',
  component: AddClientComponent },
  { path: 'addClient',
  component: AddClientComponent },
  { path: 'addResource',
  component: AddResourceComponent },
  { path: 'deleteClient',
  component: DeleteClientComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
