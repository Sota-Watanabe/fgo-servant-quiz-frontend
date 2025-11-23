import {
  useQuery,
  UseQueryOptions,
} from "@tanstack/react-query";
import { components } from "@/types/api";
import { apiClient, API_ENDPOINTS, ApiError } from "@/utils/apiClient";

export type SkillQuizResponse =
  components["schemas"]["ServantSkillGetResponseDto"];

const buildSkillEndpoint = (servantId?: string) => {
  if (servantId) {
    return `${API_ENDPOINTS.QUIZ_SKILL}?servantId=${encodeURIComponent(
      servantId
    )}`;
  }
  return API_ENDPOINTS.QUIZ_SKILL;
};

const fetchQuizData = async (
  servantId?: string
): Promise<SkillQuizResponse> => {
  return apiClient<SkillQuizResponse>(buildSkillEndpoint(servantId));
};

export const useFetchQuizSkill = (
  key: string | number = 0,
  servantId?: string,
  options?: Omit<
    UseQueryOptions<SkillQuizResponse, ApiError>,
    "queryKey"
  >
) =>
  useQuery({
    queryKey: [API_ENDPOINTS.QUIZ_SKILL, key, servantId ?? null],
    queryFn: () => fetchQuizData(servantId),
    ...options,
  });
