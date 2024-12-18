import { useQuery } from "@tanstack/react-query";
import { request } from "../baseRequest";
import { AxiosResponse } from "axios";
import { UserModel } from "../../tables-def/users";

export const useGetUsers = () => {
  const getUsers = (): Promise<AxiosResponse<UserModel[]>> => {
    return request({
      url: "/coach/users",
    });
  };

  const query = useQuery({
    queryKey: ["get-users"],
    queryFn: getUsers,
  });

  return query;
};
