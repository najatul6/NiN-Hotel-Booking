import axiosSecure from "./axiosSecure"; 
export const createPaymentIntent=async(price)=>{
    const {data}=await axiosSecure.post('/create-payment-intent',price)
    return data
}