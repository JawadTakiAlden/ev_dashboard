import { useQuery } from "@tanstack/react-query";
import { request } from "../../baseRequest";
import { AxiosResponse } from "axios";
import { AdminStats } from "../../../tables-def/admin-stats";

export const useGetStats = () => {
  const getStats = (): Promise<AxiosResponse<AdminStats>> => {
    return request({
      url: "/stats",
      params: {
        type: "group",
      },
    });
  };

  const query = useQuery({
    queryKey: ["get-stats"],
    queryFn: getStats,
  });

  return query;
};
