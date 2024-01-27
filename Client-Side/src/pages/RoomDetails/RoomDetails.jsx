import { useLoaderData } from "react-router-dom";
import Container from "../../components/Shared/Container";
import { Helmet } from "react-helmet-async";
import Header from "../../components/RoomDetails/Header/Header";
import RoomInfo from "../../components/RoomDetails/RoomInfo/RoomInfo";
import RoomReservation from "../../components/RoomDetails/RoomReservation/RoomReservation";

const RoomDetails = () => {
  const room = useLoaderData();
  return (
    <Container>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{room?.title}</title>
      </Helmet>

      {/* Room Details */}
      <div className="max-w-screen-lg mx-auto">
        {/* Headers  */}
        <div className="flex flex-col gap-6">
          <Header roomData={room} />
        </div>

        {/* Room info  */}
        <div className="grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-10">
          <RoomInfo roomData={room} />

          {/* Room Reservation */}
          <div className="md:col-span-3 order-first md:order-last mb-10">
            <RoomReservation roomData={room} />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default RoomDetails;
