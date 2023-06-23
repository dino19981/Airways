import { request } from '../request';

export type Airport = {
  key: string;
  name: string;
  city: string;
  gmt: string;
  country: string;
};

export function getAirports(airportName?: string) {
  return request<Airport[]>({
    url: '/search/airport',
    params: {
      q: airportName || '',
    },
  });
}
