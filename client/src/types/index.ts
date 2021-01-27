import { ApplicationFormData } from 'components/Application/ApplicationDrawerForm';

export enum DatabasePath {
  entries = 'entries',
  feedbacks = 'feedbacks',
  details = 'details',
  applications = 'applications',
}

export enum LoginTypes {
  emailPassword = 'emailPassword',
  google = 'google',
}

export interface Stages {
  jobsApplied: string;
  interviews: string;
  offers: string;
  pendingResponse: string;
  notAMatch: string;
}

export interface Count {
  jobsApplied: number;
  interviews: number;
  offers: number;
  pendingResponse: number;
  notAMatch: number;
}

export interface States {
  concluded: boolean;
  hired: boolean;
  interview: boolean;
  offer: boolean;
}

export interface Application extends ApplicationFormData {
  id: string;
  timestamp: number;
  updatedTimestamp?: number;
}

export type StageValue =
  | 'review'
  | 'interview'
  | 'offer'
  | 'notAMatch'
  | 'accept';

export interface IAlert {
  status: 'error' | 'success';
  msg: string;
}

export type Feedback = IAlert | null;
