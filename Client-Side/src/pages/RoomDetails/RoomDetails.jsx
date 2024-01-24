import { useParams } from "react-router-dom";
import Container from "../../components/Shared/Container";
import { useEffect, useState } from "react";
import Loader from "../../components/Shared/Loader";
import { Helmet } from "react-helmet-async";

const RoomDetails = () => {
  const { id } = useParams();
  const [room, setRoom] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("/rooms.json")
      .then((res) => res.json())
      .then((data) => {
        const singleRoom = data.find((room) => room._id === id);
        setRoom(singleRoom);
        setLoading(false);
      });
  }, [id]);
  if (loading) <Loader />;
  return (
    <Container>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{room?.title}</title>
      </Helmet>
      <div>
        <div>
          <h1>{room?.title}</h1>
          <p>{room?.location}</p>
        </div>
        <hr  className="py-2"/>
        <div className="py-2">
          <img className="rounded-xl w-full" src={room?.image} alt={room?.title} />
        </div>
        <div>
          <div className="py-5">
            <h1>Hosted by {room?.host?.name}</h1>
            <div className="flex items-center gap-2">
              <p>{room?.guests} guests</p>
              <p>{room?.bedrooms} bedrooms</p>
              <p>{room?.bathrooms} bathrooms</p>
            </div>
          </div> 
          <hr className="py-5"/>
          <p>
            {room?.description}
          </p>
          <hr className="py-5"/>
        </div>
      </div>
    </Container>
  );
};

export default RoomDetails;
