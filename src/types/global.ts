export interface PlayedShow {
  date: string; // "2025" or "2025-06-15" (ISO for full date + weekday)
  city: string;
  venue: string;
  time?: string;
  address?: string;
  link?: string; // ticket link (backwards compat)
  ticketLink?: string;
  facebookLink?: string;
  otherLink?: string;
  otherBands?: string;
  price?: number;
  notes?: string;
  band?: string;
}
