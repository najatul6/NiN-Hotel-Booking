import { useState } from "react";
import Button from "../../Button/Button";
import Calender from "../Calender/Calender";
import { formatDistance } from "date-fns";
import BookingModal from "../../Modal/BookingModal";
import useAuth from "../../../hooks/useAuth";

const RoomReservation = ({ roomData }) => {
  let [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();

  const closeModal = () => {
    setIsOpen(false);
  };
  const [value, setValue] = useState({
    startDate: new Date(roomData?.from),
    endDate: new Date(roomData?.to),
    key: "selection",
  });

  //   Total days * price
  const totalDays = parseInt(
    formatDistance(new Date(roomData?.to), new Date(roomData?.from)).split(
      " "
    )[0]
  );
  // Total Price Calculation
  const totalPrice = totalDays * roomData?.price;

  const [bookingInfo, setBookingInfo] = useState({
    guest: {
      name: user?.displayName,
      email: user?.email,
      image: user?.photoURL,
    },
    host:roomData?.host?.email,
    location:roomData?.location,
    price:totalPrice,
    to:value?.endDate,
    from:value?.startDate,
    title:roomData?.title,
    roomId:roomData?._id,
    image:roomData?.image
  });

  return (
    <div className="rounded-xl border-[1px] border-neutral-200 overflow-hidden bg-white shadow-lg">
      <div className="flex items-center gap-1 p-4">
        <div className="text-2xl font-semibold text-deep-orange">
          $ {roomData?.price}
        </div>
        <div className="font-light text-neutral-600">per night</div>
      </div>
      <hr />
      <div className="flex justify-center">
        <Calender value={value} />
      </div>
      <hr />
      <div className="p-4">
        <Button disabled={roomData?.host?.email || roomData?.booked} onClick={() => setIsOpen(true)} label={"Reserve"} />
      </div>
      <hr />
      <div className="p-4 flex items-center justify-between font-semibold text-lg">
        <div>Total :</div>
        <div className="text-deep-orange">$ {totalPrice}</div>
      </div>
      <BookingModal isOpen={isOpen} closeModal={closeModal} bookingInfo={bookingInfo}/>
    </div>
  );
};

export default RoomReservation;
