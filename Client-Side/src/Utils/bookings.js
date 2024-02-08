import axiosSecure from "./axiosSecure";

// Create Payment intent
export const createPaymentIntent = async (price) => {
  const { data } = await axiosSecure.post("/create-payment-intent", price);
  return data;
};

// Save booking info in db
export const saveBookingInfo = async (paymentInfo) => {
  const { data } = await axiosSecure.post("/bookings", paymentInfo);
  return data;
};

// Update room status after room booking in db
export const updateStatus = async (id, status) => {
  const { data } = await axiosSecure.patch(`/rooms/status/${id}`, { status });
  return data;
};

// Get all bookings for a guest by email
export const getBookings = async (email) => {
  const { data } = await axiosSecure(`/booking?email=${email}`);
  return data;
};
