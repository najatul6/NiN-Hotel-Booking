import Categories from "../../components/Categories/Categories"
import Rooms from "../../components/Rooms/Rooms";


const Home = () => {
  return (
    <div>
      {/* Category Section  */}
      <Categories/>
      {/* Room Section  */}
      <Rooms/>
    </div>
  );
}

export default Home;
