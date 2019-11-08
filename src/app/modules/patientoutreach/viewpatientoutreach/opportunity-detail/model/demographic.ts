import { Address } from './address';
import { Atenainfo } from './atenainfo';

export abstract class Demographic {
    id: number;
    patientFirstName: string;
    patientLastName: string;
    patientMiddleNameInitials: string;
    dateOfBirth: string;
    age: string;
    gender: string;
    address: Address;
    primaryPhNo: string;
    alternatePhNo: string;
    preferredLanguage: string;
    visuallyImpaired: string;
    textMessagingEnrollmentIndicator: string;
    topCustomerInd: string;
    seasonalPatientEnrollment: string;
    aetnaPatientInd: string;
    aetnaInfo: Atenainfo;
    primaryCaregiverIndicator: string;
    ninetyDayInd: string;
    rxDelivery: string;
    enterprisePatientInd: string;
    panelHomeStoreId: string;
    petPatientInd: string;
    petOwnerFirstName: string;
    petOwnerLastName: string;

}
