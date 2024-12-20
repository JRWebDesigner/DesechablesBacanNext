import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,//n6cdpxce
  dataset,//bacan
  apiVersion,//
  useCdn: true,
})
