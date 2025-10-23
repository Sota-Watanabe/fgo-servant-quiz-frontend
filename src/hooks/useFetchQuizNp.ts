import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { components } from "@/types/api";
import { apiClient, API_ENDPOINTS, ApiError } from "@/utils/apiClient";

export type NoblePhantasmQuizResponse =
  components["schemas"]["ServantNpGetResponseDto"];

const fetchQuizNoblePhantasm =
  async (): Promise<NoblePhantasmQuizResponse> => {
    return apiClient<NoblePhantasmQuizResponse>(API_ENDPOINTS.QUIZ_NP);
  };

export const useFetchQuizNp = (
  key: string | number = 0,
  options?: Omit<
    UseQueryOptions<NoblePhantasmQuizResponse, ApiError>,
    "queryKey" | "queryFn"
  >
) =>
  useQuery({
    queryKey: [API_ENDPOINTS.QUIZ_NP, key],
    queryFn: fetchQuizNoblePhantasm,
    ...options,
  });
