import MenuItem from "./MenuItem";
import { FaUserCog } from "react-icons/fa";

const AdminMenu = () => {
  return (
    <>
      <MenuItem icon={FaUserCog} label="Manage Users" address="manage-users" />
    </>
  );
};

export default AdminMenu;
