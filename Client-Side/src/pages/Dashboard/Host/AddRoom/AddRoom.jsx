import { Helmet } from "react-helmet-async";
import AddRoomForm from "../../../../components/Form/AddRoomFrom";
import { useState } from "react";
import { imageUpload } from "../../../../Utils/ImageUpload";
import useAuth from "../../../../hooks/useAuth";

const AddRoom = () => {
  const { user } = useAuth();
  const [loading,setLoading]= useState(false);
  const [uploadButtonText,setUploadButtonText]=useState('Upload Image')
  const [dates, setDates] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const location = form.location.value;
    const category = form.category.value;
    const title = form.title.value;
    const to = dates?.endDate;
    const from = dates?.startDate;
    const image = form.image.files[0];
    const price = form.price.value;
    const guests = form.total_guest.value;
    const bedrooms = form.bedrooms.value;
    const bathrooms = form.bathrooms.value;
    const description = form.description.value;
    const host = {
      name: user?.displayName,
      image: user?.photoURL,
      email: user?.email,
    };
    const image_url = await imageUpload(image);
    const roomData = {
      location,
      title,
      from,
      to,
      price,
      guests,
      bedrooms,
      bathrooms,
      description,
      image: image_url?.display_url,
      host,
      category,
    };
    console.log("hello", roomData);
  };

  //   Handle date change from react-date-range calender
  const handleDates = (ranges) => {
    console.log(ranges);
    setDates(ranges?.selection);
  };

//   handle image Preview
const handleImageChange=image=>{
    setUploadButtonText(image?.name)
}
  return (
    <div>
      <Helmet>
        <title>Add Room | Dashboard</title>
      </Helmet>
      {/* Room From */}
      <AddRoomForm
        handleSubmit={handleSubmit}
        handleDates={handleDates}
        dates={dates}
        handleImageChange={handleImageChange}
        loading={loading}
        uploadButtonText={uploadButtonText}
      />
    </div>
  );
};

export default AddRoom;
