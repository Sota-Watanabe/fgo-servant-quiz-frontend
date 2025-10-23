import { useQuery } from "@tanstack/react-query";
import { components } from "@/types/api";
import { apiClient, API_ENDPOINTS } from "@/utils/apiClient";

type SkillQuizResponse = components["schemas"]["ServantSkillGetResponseDto"];

const fetchQuizData = async (): Promise<SkillQuizResponse> => {
  return apiClient<SkillQuizResponse>(API_ENDPOINTS.QUIZ_SKILL);
};

export const useFetchQuizSkill = (questionCount: number = 0) => {
  return useQuery({
    queryKey: [API_ENDPOINTS.QUIZ_SKILL, questionCount],
    queryFn: fetchQuizData,
  });
};
