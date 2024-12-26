import "server-only";
//ayuda a que el codigo solo se ejecute en el servidor
import type { QueryParams } from "@sanity/client";
import { draftMode } from "next/headers";
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
  const { isEnabled: isDraftMode } = await draftMode();
  if (isDraftMode && !token) {
    throw new Error(
      "The `SANITY_API_READ_TOKEN` environment variable is required to fetch drafts."
    );
  }

  const fetchOptions: any = {
    ...params,
  };

  if (isDraftMode) {
    fetchOptions.token = token;
  }

  if (tags.length > 0) {
    fetchOptions.tag = tags.join(",");
  }

  return client.fetch(query, fetchOptions);
}