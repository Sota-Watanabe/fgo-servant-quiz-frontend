import {
  useQuery,
  UseQueryOptions,
} from "@tanstack/react-query";
import { components } from "@/types/api";
import { apiClient, API_ENDPOINTS, ApiError } from "@/utils/apiClient";

export type NoblePhantasmVoiceQuizResponse =
  components["schemas"]["ServantNpVoiceGetResponseDto"];

const buildNpVoiceEndpoint = (servantId?: string) => {
  if (servantId) {
    return `${API_ENDPOINTS.QUIZ_NP_VOICE}?servantId=${encodeURIComponent(
      servantId
    )}`;
  }
  return API_ENDPOINTS.QUIZ_NP_VOICE;
};

const fetchQuizNoblePhantasmVoice = async (
  servantId?: string
): Promise<NoblePhantasmVoiceQuizResponse> => {
  return apiClient<NoblePhantasmVoiceQuizResponse>(buildNpVoiceEndpoint(servantId));
};

export const useFetchQuizNpVoice = (
  key: string | number = 0,
  servantId?: string,
  options?: Omit<
    UseQueryOptions<NoblePhantasmVoiceQuizResponse, ApiError>,
    "queryKey"
  >
) =>
  useQuery({
    queryKey: [API_ENDPOINTS.QUIZ_NP_VOICE, key, servantId ?? null],
    queryFn: () => fetchQuizNoblePhantasmVoice(servantId),
    ...options,
  });
