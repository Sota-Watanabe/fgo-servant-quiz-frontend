import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { components } from "@/types/api";
import { apiClient, API_ENDPOINTS, ApiError } from "@/utils/apiClient";

export type NoblePhantasmQuizResponse =
  components["schemas"]["ServantNpGetResponseDto"];

const buildNpEndpoint = (servantId?: string) => {
  if (servantId) {
    return `${API_ENDPOINTS.QUIZ_NP}?servantId=${encodeURIComponent(
      servantId
    )}`;
  }
  return API_ENDPOINTS.QUIZ_NP;
};

const fetchQuizNoblePhantasm = async (
  servantId?: string
): Promise<NoblePhantasmQuizResponse> => {
  return apiClient<NoblePhantasmQuizResponse>(buildNpEndpoint(servantId));
};

export const useFetchQuizNp = (
  key: string | number = 0,
  servantId?: string,
  options?: Omit<
    UseQueryOptions<NoblePhantasmQuizResponse, ApiError>,
    "queryKey" | "queryFn"
  >
) =>
  useQuery({
    queryKey: [API_ENDPOINTS.QUIZ_NP, key, servantId ?? null],
    queryFn: () => fetchQuizNoblePhantasm(servantId),
    ...options,
  });
