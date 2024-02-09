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
  console.log("Token From SErver------------------>", data);
  return data;
};

// Remove token from server
export const clearCookie = async () => {
  const { data } = await axiosSecure.get(`/logout`);
  return data;
};

// Get user role
export const getRole = async (email) => {
  const { data } = await axiosSecure.get(`/user/${email}`);
  return data.role;
};

// Get all user
export const getUser = async () => {
  const { data } = await axiosSecure.get("/users");
  return data;
};

// Update User data in Database
export const updateRole = async ({ email, role }) => {
  const currentUser = {
    email,
    role,
    status: "Verified",
  };
  const { data } = await axiosSecure.put(`/users/update/${email}`, currentUser);
  return data;
};

// Become a host
export const becomeHost = async (email) => {
  const currentUser = {
    email,
    status: "Requested",
  };
  const { data } = await axiosSecure.put(`/users/${email}`, currentUser);
  return data
};
