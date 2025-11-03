import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { components } from "@/types/api";
import { apiClient, API_ENDPOINTS, ApiError } from "@/utils/apiClient";

export type ProfileQuizResponse =
  components["schemas"]["ServantProfileGetResponseDto"];

const buildProfileEndpoint = (servantId?: string) => {
  if (servantId) {
    return `${API_ENDPOINTS.QUIZ_PROFILE}?servantId=${encodeURIComponent(
      servantId
    )}`;
  }
  return API_ENDPOINTS.QUIZ_PROFILE;
};

const fetchQuizProfile = async (
  servantId?: string
): Promise<ProfileQuizResponse> => {
  return apiClient<ProfileQuizResponse>(buildProfileEndpoint(servantId));
};

export const useFetchQuizProfile = (
  key: string | number = 0,
  servantId?: string,
  options?: Omit<
    UseQueryOptions<ProfileQuizResponse, ApiError>,
    "queryKey" | "queryFn"
  >
) =>
  useQuery({
    queryKey: [API_ENDPOINTS.QUIZ_PROFILE, key, servantId ?? null],
    queryFn: () => fetchQuizProfile(servantId),
    ...options,
  });
