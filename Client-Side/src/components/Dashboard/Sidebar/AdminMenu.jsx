import MenuItem from "./MenuItem";
import { FaUserCog } from "react-icons/fa";

const AdminMenu = () => {
  return (
    <>
      <MenuItem icon={FaUserCog} label="Manage User" address="manage-user" />
    </>
  );
};

export default AdminMenu;
