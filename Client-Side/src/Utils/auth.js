import axiosSecure from "./axiosSecure";

// Save User data in Database
export const saveUser = async (user) => {
  const currentUser = {
    email: user?.email,
    role: "guest",
    status: "Verified",
  };
  const { data } = await axiosSecure.put(`/users/${user?.email}`, currentUser);
  return data;
};

// Get token from server
export const getToken = async (email) => {
  const { data } = await axiosSecure.post(`/jwt`, email);
  console.log("Token From SErver------------------>",data)
  return data;
};
