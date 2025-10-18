import { useQuery } from "@tanstack/react-query";
import { components } from "@/types/api";
import { apiClient, API_ENDPOINTS } from "@/utils/apiClient";

type ServantsOptionsResponse = components["schemas"]["ServantsOptionsGetResponseDto"];

const fetchServantsOptions = async (): Promise<ServantsOptionsResponse> => {
  return apiClient<ServantsOptionsResponse>(API_ENDPOINTS.SERVANTS_OPTIONS);
};

export const useFetchServantsOption = () => {
  return useQuery({
    queryKey: [API_ENDPOINTS.SERVANTS_OPTIONS],
    queryFn: fetchServantsOptions,
  });
};
