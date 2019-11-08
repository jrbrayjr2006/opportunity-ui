import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { OppDetailModel } from '../model/oppdetail.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OppDetailService {

  constructor(private httpClient: HttpClient) { }

  getPatientDetails(): Observable<OppDetailModel> {
    return this.httpClient.get<OppDetailModel>('/opportunity-service/opportunities');
  }
}
