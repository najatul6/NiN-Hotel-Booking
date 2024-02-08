import MenuItem from "./MenuItem";
import { BsHouseAddFill } from "react-icons/bs";
import { MdMapsHomeWork, MdOutlineManageHistory } from "react-icons/md";

const HostMenu = () => {
  return (
    <>
      <MenuItem icon={BsHouseAddFill} label="Add Room" address="add-room" />

      <MenuItem
        icon={MdMapsHomeWork}
        label="My Listings"
        address="my-listings"
      />
      <MenuItem
        icon={MdMapsHomeWork}
        label="My Listings"
        address="my-listings"
      />
      <MenuItem
        icon={MdOutlineManageHistory}
        label='Manage Bookings'
        address='manage-bookings'
      />
    </>
  );
};

export default HostMenu;
