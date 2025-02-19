import { sanityFetch } from './fetch';
import { offersQuery } from './queries';

export async function fetchOffers() {
  const data = await sanityFetch({ query: offersQuery });
  return data;
}