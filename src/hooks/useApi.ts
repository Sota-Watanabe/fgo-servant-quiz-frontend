/**
 * React Query用のカスタムフック群
 */
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { apiClient, API_ENDPOINTS, ApiError } from "@/utils/apiClient";
import { components } from "@/types/api";

// 型のエイリアス
type ServantsOptionsResponse = components["schemas"]["ServantsOptionsGetResponseDto"];
type SkillQuizResponse = components["schemas"]["ServantDetailGetResponseDto"];

/**
 * スキルクイズデータを取得するカスタムフック
 * @param key - クエリキー（ページ名+questionCountなど）
 * @param options - React Queryのオプション
 */
export const useFetchQuizSkill = (
  key: string = "skill-practice-0",
  options?: Omit<UseQueryOptions<SkillQuizResponse, ApiError>, 'queryKey' | 'queryFn'>
) => {
  return useQuery({
    queryKey: [API_ENDPOINTS.QUIZ_SKILL, key],
    queryFn: () => apiClient<SkillQuizResponse>(API_ENDPOINTS.QUIZ_SKILL),
    ...options,
  });
};

/**
 * サーヴァント選択肢データを取得するカスタムフック
 * @param options - React Queryのオプション
 */
export const useFetchServantsOptions = (
  options?: Omit<UseQueryOptions<ServantsOptionsResponse, ApiError>, 'queryKey' | 'queryFn'>
) => {
  return useQuery({
    queryKey: [API_ENDPOINTS.SERVANTS_OPTIONS],
    queryFn: () => apiClient<ServantsOptionsResponse>(API_ENDPOINTS.SERVANTS_OPTIONS),
    ...options,
  });
};
