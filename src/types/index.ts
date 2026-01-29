export type PracticeSummary = {
  id: string;
  name: string;
  city: string;
  country: string;
  newPatientsThisMonth: number;
  appointmentRequests: number;
  conversionRate: number; // e.g., 18.5
  monthlyTrend: number[]; // length 6, e.g., [10, 12, 8, 15, 18, 20] (new patients)
  marketingSpend?: number; // Optional additional metric
};

export type StatusType = 'high-performer' | 'at-risk' | 'stable';
