import { PropagateLoader } from "react-spinners";

const Loader = ({ smallHeight }) => {
  return (
    <div
      className={` ${smallHeight ? "h-[250px]" : "h-[70vh]"}
      flex 
      flex-col 
      justify-center 
      items-center `}
    >
      <PropagateLoader size={30} color="#ff6d01" />
    </div>
  );
};

export default Loader;
