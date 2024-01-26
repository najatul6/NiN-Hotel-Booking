import { useSearchParams } from "react-router-dom";
import { categories } from "../../Utils/categoriesData";
import Container from "../Shared/Container";
import CategoriesBox from "./CategoriesBox/CategoriesBox";

const Categories = () => {
  const [params, setParams] = useSearchParams();
  const category = params.get("category");
  return (
    <Container>
      <div className="pt-4 flex items-center justify-between overflow-x-auto">
        {categories?.map((item) => (
          <CategoriesBox
            key={item?.label}
            label={item?.label}
            icon={item?.icon}
            selected={category===item?.label}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
