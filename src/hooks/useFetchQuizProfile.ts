import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { components } from "@/types/api";
import { apiClient, API_ENDPOINTS, ApiError } from "@/utils/apiClient";

export type ProfileQuizResponse =
  components["schemas"]["ServantProfileGetResponseDto"];

const fetchQuizProfile = async (): Promise<ProfileQuizResponse> => {
  return apiClient<ProfileQuizResponse>(API_ENDPOINTS.QUIZ_PROFILE);
};

export const useFetchQuizProfile = (
  key: string | number = 0,
  options?: Omit<
    UseQueryOptions<ProfileQuizResponse, ApiError>,
    "queryKey" | "queryFn"
  >
) =>
  useQuery({
    queryKey: [API_ENDPOINTS.QUIZ_PROFILE, key],
    queryFn: fetchQuizProfile,
    ...options,
  });
