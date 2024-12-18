import { useQuery } from "@tanstack/react-query";
import { request, ServerResponse } from "../baseRequest";
import { AxiosResponse } from "axios";
import { UserModel } from "../../tables-def/users";
import { useParams } from "react-router";
import { UserProfileModel } from "../../tables-def/user-profile";

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

export const useGetUserProfile = () => {
  const { userId } = useParams();
  const getUserProfile = (): Promise<AxiosResponse<UserProfileModel>> => {
    return request({
      url: `/coach/user/${userId}`,
    });
  };

  const query = useQuery({
    queryKey: [`get-user-profile-${userId}`],
    queryFn: getUserProfile,
  });

  return query;
};

export const useGetUserWeightRecords = () => {
  const { userId } = useParams();
  const getUserWeight = () => {
    return request({
      url: `/coach/user/${userId}/weight-records`,
    });
  };

  const query = useQuery({
    queryKey: [`get-user-weight-records-${userId}`],
    queryFn: getUserWeight,
  });

  return query;
};
