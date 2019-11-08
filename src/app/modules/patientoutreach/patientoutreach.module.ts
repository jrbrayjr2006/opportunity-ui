import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewpatientoutreachComponent } from './viewpatientoutreach/viewpatientoutreach.component';
import { OpportunityDetailComponent } from './viewpatientoutreach/opportunity-detail/opportunity-detail.component';
import { OpportunityListComponent } from './viewpatientoutreach/opportunity-detail/opportunity-list/opportunity-list.component';
import { OpportunitySummaryComponent } from './viewpatientoutreach/opportunity-detail/opportunity-summary/opportunity-summary.component';
import { PatientDemographicComponent } from './viewpatientoutreach/opportunity-detail/patient-demographic/patient-demographic.component';
import { PatientProfileTabComponent } from './viewpatientoutreach/opportunity-detail/patient-profile-tab/patient-profile-tab.component';



@NgModule({
  declarations: [ViewpatientoutreachComponent, OpportunityDetailComponent, OpportunityListComponent, OpportunitySummaryComponent, PatientDemographicComponent, PatientProfileTabComponent],
  imports: [
    CommonModule
  ]
})
export class PatientoutreachModule { }
