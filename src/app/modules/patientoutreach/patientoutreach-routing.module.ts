import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewpatientoutreachComponent } from './viewpatientoutreach/viewpatientoutreach.component';

const routes: Routes = [{
  path: '',
  component: ViewpatientoutreachComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientoutreachRoutingModule { }
