import axios from "axios";
import axiosSecure from "./axiosSecure";

export const imageUpload = async (image) => {
  const formData = new FormData();
  formData.append("image", image);
  const { data } = await axios.post(
    `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_KEY}`,
    formData
  );
  return data
};

// Admin Stats
export const getAdminStat=async()=>{
  const {data}=await axiosSecure('/admin-stat')
  return data
}

// Host Stats
export const getHostStat=async()=>{
  const {data}=await axiosSecure('/host-stat')
  return data
}

// Guest Stats
export const getGuestStat=async()=>{
  const {data}=await axiosSecure('/guest-stat')
  return data
}
