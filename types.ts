export type Step = 'hero' | 'intake' | 'pricing' | 'confirmation';

export enum PlanType {
  STANDARD = 'Standard',
  PRIORITY = 'Priority'
}

export interface FormData {
  city: string;
  livingArrangement: string;
  hoursNeeded: string;
  startDate: string;
  budget: string;
  whatsapp: string;
  email: string;
  specialRequirements: string;
}

export interface PricingPlan {
  id: PlanType;
  name: string;
  price: number;
  features: string[];
  recommended?: boolean;
}