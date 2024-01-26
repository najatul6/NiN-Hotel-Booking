import { differenceInDays } from "date-fns";
import Button from "../../Button/Button";
import Calender from "../Calender/Calender";
import { useState } from "react";

const RoomReservation = ({ roomData }) => {
  //   Price Calculation
  // Total Days * price
//   const totalDays = differenceInDays(
//     new Date(roomData?.to),
//     new Date(roomData?.from)
//   );
//   const totalPrice = totalDays * roomData?.price;
//   const [value, setValue] = useState({
//     selection: {
//       startDate: new Date(roomData?.from),
//       endDate: new Date(roomData?.to),
//       key: "selection",
//     },
//   });

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
        <Calender />
      </div>
      <hr />
      <div className="p-4">
        <Button label={"Reserve"} />
      </div>
      <hr />
      <div className="p-4 flex items-center justify-between font-semibold text-lg">
        <div>Total :</div>
        <div className="text-deep-orange">$ {roomData?.price}</div>
      </div>
    </div>
  );
};

export default RoomReservation;
