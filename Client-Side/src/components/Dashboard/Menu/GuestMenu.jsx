import { GrUserAdmin } from "react-icons/gr";
import useRole from "../../../hooks/useRole";
import MenuItem from "../Sidebar/MenuItem";
import { BsFingerprint } from "react-icons/bs";
import { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import HostRequestModal from "../../Modal/HostRequestModal";
import { becomeHost } from "../../../Utils/auth";
import toast from "react-hot-toast";

const GuestMenu = () => {
  const [role] = useRole();
  const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const modalHandler = async () => {
    try {
      const data = await becomeHost(user?.email);
      console.log(data);
      if (data.modifiedCount > 0) {
        toast.success("Success! Please wait for admin confirmation.");
      } else {
        toast.success("Pending, wait for admin approval✋");
      }
    } catch (err) {
      toast.error(err.message);
    } finally {
      setIsOpen(false);
    }
  };
  return (
    <>
      <MenuItem
        icon={BsFingerprint}
        label="My Bookings"
        address="my-bookings"
      />
      {role === "guest" && (
        <div
          onClick={() => setIsOpen(true)}
          className="flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform text-gray-600  hover:bg-gray-300   hover:text-gray-700 cursor-pointer"
        >
          <GrUserAdmin className="w-5 h-5" />

          <span className="mx-4 font-medium">Become A Host</span>
        </div>
      )}

      {/* Request host Modal */}
      <HostRequestModal
        modalHandler={modalHandler}
        isOpen={isOpen}
        closeModal={setIsOpen}
      />
    </>
  );
};

export default GuestMenu;
