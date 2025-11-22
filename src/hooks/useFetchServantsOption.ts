import {
  useSuspenseQuery,
  UseSuspenseQueryOptions,
} from "@tanstack/react-query";
import { components } from "@/types/api";
import { apiClient, API_ENDPOINTS, ApiError } from "@/utils/apiClient";

export type ServantsOptionsResponse =
  components["schemas"]["ServantsOptionsGetResponseDto"];

const fetchServantsOptions = async (): Promise<ServantsOptionsResponse> => {
  return apiClient<ServantsOptionsResponse>(API_ENDPOINTS.SERVANTS_OPTIONS);
};

export const useFetchServantsOption = (
  options?: Omit<
    UseSuspenseQueryOptions<ServantsOptionsResponse, ApiError>,
    "queryKey"
  >
) =>
  useSuspenseQuery({
    queryKey: [API_ENDPOINTS.SERVANTS_OPTIONS],
    queryFn: fetchServantsOptions,
    ...options,
  });
