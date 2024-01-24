import { Helmet } from "react-helmet-async";
import Categories from "../../components/Categories/Categories";
import Rooms from "../../components/Rooms/Rooms";

const Home = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>HOTEL.NiN | Home</title>
      </Helmet>
      {/* Categories Section  */}
      <Categories />
      {/* Room Section  */}
      <Rooms />
    </div>
  );
};

export default Home;
