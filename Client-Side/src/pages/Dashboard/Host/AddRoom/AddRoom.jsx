import { Helmet } from "react-helmet-async";
import AddRoomForm from "../../../../components/Form/AddRoomFrom";

const AddRoom = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const location = form.location.value;
    const category = form.category.value;
    const title = form.title.value;
    const to = "";
    const from = "";
    const image = form.image.value;
    const price = form.price.value;
    const total_guest = form.total_guest.value;
    const bedrooms = form.bedrooms.value;
    const bathrooms = form.bathrooms.value;
    const description = form.description.value;

    console.log("hello");
  };
  return (
    <div>
      <Helmet>
        <title>Add Room | Dashboard</title>
      </Helmet>
      {/* Room From */}
      <AddRoomForm handleSubmit={handleSubmit} />
    </div>
  );
};

export default AddRoom;
