import { CallDetailsModel } from './call-details.model';
import { OtherDetailsModel } from './other-details.model';

export class OppDetailModel {
    patientId: string;
    patientName: string;
    preferredLanguage: string;
    Gender: string;
    customerPref: string;
    patientPharmacyType: string;
    delivery: string;
    medicationType: string;
    home_store: string;
    DOB: string;
    Age: number;
    phone: string;
    text: string;
    altphone: string;
    email: string;
    adress: string;
    callingDetails: CallDetailsModel;
    otherDetails: OtherDetailsModel;
}