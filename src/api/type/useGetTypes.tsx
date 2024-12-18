import { useQuery } from "@tanstack/react-query";
import { request } from "../baseRequest";

const useGetTypes = () => {
  const getTypes = () => {
    return request({
      url: "/admin/types",
    });
  };

  const query = useQuery({
    queryKey: ["get-types"],
    queryFn: getTypes,
  });

  return query;
};

export default useGetTypes;
