import { useNavigate, useSearchParams } from "react-router-dom";
import qs from 'query-string'

const CategoriesBox = ({ label, icon: Icon }) => {
  const [params, setParams] = useSearchParams();
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
      navigate(url)
    }
  };
  params.get("Category");
  return (
    <div
      onClick={handleClick}
      className="flex flex-col justify-center items-center gap-2 p-3 border-b-2 hover:border-b-deep-orange border-b-neutral-800 text-neutral-800 hover:text-deep-orange transition-all cursor-pointer duration-300"
    >
      <Icon size={26} />
      <div className="text-sm font-medium">{label}</div>
    </div>
  );
};

export default CategoriesBox;
