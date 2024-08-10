import { useNavigate, useSearchParams } from "react-router-dom";
import qs from "query-string";
import PropTypes from "prop-types";

const CategoriesBox = ({ label, icon:Icon, selected }) => {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const handleClick = () => {
    let currentQuery = {};
    if (params) {
      currentQuery = qs.parse(params.toString());
      const updateQuery = { ...currentQuery, category: label };
      const url = qs.stringifyUrl({
        url: "/",
        query: updateQuery,
      });
      navigate(url);
    }
  };
  params.get("category");
  const handleKeyPress = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      handleClick();
    }
  };
  return (
    <div
      onClick={handleClick}
      onKeyDown={handleKeyPress}
      tabIndex={0}
      className={`
      flex 
      flex-col 
      justify-center 
      items-center 
      gap-2 
      border-b-2
      p-3
      ${selected?'border-b-deep-orange text-deep-orange ':"border-b-transparent text-neutral-800"}
      hover:border-b-deep-orange 
      hover:text-deep-orange 
      transition-all 
      cursor-pointer 
      rounded-b
      duration-300`}
    >
      <Icon size={26} />
      <div className="text-sm font-medium">{label}</div>
    </div>
  );
};

CategoriesBox.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
  selected: PropTypes.bool.isRequired,
}


export default CategoriesBox;
