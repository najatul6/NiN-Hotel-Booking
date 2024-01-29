import { Helmet } from "react-helmet-async";
import AddRoomForm from "../../../../components/Form/AddRoomFrom";
import { useState } from "react";

const AddRoom = () => {
  const [dates, setDates] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const location = form.location.value;
    const category = form.category.value;
    const title = form.title.value;
    const to = dates?.endDate;
    const from = dates?.startDate;
    const image = form.image.files[0];
    const price = form.price.value;
    const total_guest = form.total_guest.value;
    const bedrooms = form.bedrooms.value;
    const bathrooms = form.bathrooms.value;
    const description = form.description.value;

    console.log("hello");
  };

  //   Handle date change from react-date-range calender
  const handleDates = (ranges) => {
    setDates(ranges?.selection);
  };
  return (
    <div>
      <Helmet>
        <title>Add Room | Dashboard</title>
      </Helmet>
      {/* Room From */}
      <AddRoomForm handleSubmit={handleSubmit} handleDates={handleDates} dates={dates} />
    </div>
  );
};

export default AddRoom;
