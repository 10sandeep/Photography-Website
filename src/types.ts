export interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  category: string;
  url: string;
}

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  price: number;
  suffix?: string;
  features: string[];
}