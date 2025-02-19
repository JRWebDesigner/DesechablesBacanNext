//import "server-only";
import type { QueryParams } from "@sanity/client";
import { client } from "./client";

const DEFAULT_PARAMS = {} as QueryParams;
const DEFAULT_TAGS = [] as string[];

export const token = process.env.SANITY_API_READ_TOKEN;

export async function sanityFetch<QueryResponse>({
  query,
  params = DEFAULT_PARAMS,
  tags = DEFAULT_TAGS,
}: {
  query: string;
  params?: QueryParams;
  tags?: string[];
}): Promise<QueryResponse> {
  const fetchOptions: QueryParams & { token?: string; tag?: string } = {
    ...params,
  };

  if (token) {
    (fetchOptions as any).token = token;
  }

  if (tags.length > 0) {
    (fetchOptions as any).tag = tags.join(",");
  }

  return client.fetch(query, fetchOptions);
}