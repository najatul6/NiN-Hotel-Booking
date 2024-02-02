import MenuItem from "./MenuItem";
import { BsHouseAddFill } from "react-icons/bs";
import { MdMapsHomeWork } from "react-icons/md";

const HostMenu = () => {
  return (
    <>
      <MenuItem icon={BsHouseAddFill} label="Add Room" address="add-room" />

      <MenuItem
        icon={MdMapsHomeWork}
        label="My Listings"
        address="my-listings"
      />
    </>
  );
};

export default HostMenu;
