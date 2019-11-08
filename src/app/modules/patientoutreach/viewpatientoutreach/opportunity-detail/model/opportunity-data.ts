import { BestTimeToCall } from './best-time-to-call';

export interface OpportunityData {
    patientId: number;
    role: string;
    type: string;
    lastAttempt: string;
    patientName: string;
    status: string;
    nextvisit: string;
    bestTimeToCall: BestTimeToCall;
    lastPickUpDate: string;
}

