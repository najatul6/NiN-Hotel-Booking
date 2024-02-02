import { useEffect, useState } from "react";
import useAuth from "./useAuth";
import { getRole } from "../Utils/auth";
import { useQuery } from "@tanstack/react-query";

const useRole = () => {
  const { user,loading } = useAuth();
  // const [role, setRole] = useState(null);
  // const [loading,setLoading]=useState(true)
  // useEffect(() => {
  //   setLoading(true)
  //   getRole(user?.email).then(data => {
  //     setRole(data);
  //     setLoading(false)
  //   });
  // }, [user]);
  const {data:role,isLoading}=useQuery({
    enabled: !loading && !!user?.email,
    queryFn:async()=>await getRole(user?.email),
    queryKey:['role']
  })
  return [role,isLoading];
};

export default useRole;
