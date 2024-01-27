import { useState } from "react";
import Button from "../../Button/Button";
import Calender from "../Calender/Calender";
import { formatDistance } from "date-fns";

const RoomReservation = ({ roomData }) => {
    const [value, setValue] = useState({
      startDate: new Date(roomData?.from),
      endDate: new Date(roomData?.to),
      key: 'selection',
    })

  //   Total days * price
    const totalDays = parseInt(
      formatDistance(new Date(roomData?.to), new Date(roomData?.from)).split(' ')[0]
    )
  // Total Price Calculation
    const totalPrice = totalDays * roomData?.price
 

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
        <Calender value={value}/>
      </div>
      <hr />
      <div className="p-4">
        <Button label={"Reserve"} />
      </div>
      <hr />
      <div className="p-4 flex items-center justify-between font-semibold text-lg">
        <div>Total :</div>
        <div className="text-deep-orange">$ {totalPrice}</div>
      </div>
    </div>
  );
};

export default RoomReservation;
