import {
  useQuery,
  UseQueryOptions,
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
    UseQueryOptions<ServantsOptionsResponse, ApiError>,
    "queryKey"
  >
) =>
  useQuery({
    queryKey: [API_ENDPOINTS.SERVANTS_OPTIONS],
    queryFn: fetchServantsOptions,
    ...options,
  });
