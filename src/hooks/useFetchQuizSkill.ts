import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { components } from "@/types/api";
import { apiClient, API_ENDPOINTS, ApiError } from "@/utils/apiClient";

export type SkillQuizResponse =
  components["schemas"]["ServantSkillGetResponseDto"];

const fetchQuizData = async (): Promise<SkillQuizResponse> => {
  return apiClient<SkillQuizResponse>(API_ENDPOINTS.QUIZ_SKILL);
};

export const useFetchQuizSkill = (
  key: string | number = 0,
  options?: Omit<
    UseQueryOptions<SkillQuizResponse, ApiError>,
    "queryKey" | "queryFn"
  >
) =>
  useQuery({
    queryKey: [API_ENDPOINTS.QUIZ_SKILL, key],
    queryFn: fetchQuizData,
    ...options,
  });
