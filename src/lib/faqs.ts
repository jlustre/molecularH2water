import { getApiUrl } from "./api";
import { faqs as fallbackFaqs, type Faq } from "../data/siteContent";

export type FaqItem = Faq & {
  id?: number;
  sort_order?: number;
};

type FaqsResponse = {
  count: number;
  data: Array<{
    answer: string;
    id: number;
    question: string;
    sort_order: number;
    updated_at?: string | null;
  }>;
};

export async function fetchPublishedFaqs(signal?: AbortSignal): Promise<FaqItem[]> {
  const response = await fetch(getApiUrl("/api/faqs"), {
    headers: {
      Accept: "application/json",
    },
    signal,
  });

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  const contentType = response.headers.get("content-type") ?? "";

  if (!contentType.includes("application/json")) {
    throw new Error("The FAQ API returned a non-JSON response.");
  }

  const payload = (await response.json()) as FaqsResponse;

  return (payload.data ?? []).map((faq) => ({
    id: faq.id,
    question: faq.question,
    answer: faq.answer,
    sort_order: faq.sort_order,
  }));
}

export function getFallbackFaqs(): FaqItem[] {
  return fallbackFaqs;
}
