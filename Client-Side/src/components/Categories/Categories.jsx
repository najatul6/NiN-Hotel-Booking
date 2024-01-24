
import { categories } from "../../Utils/categoriesData";
import Container from "../Shared/Container";
import CategoriesBox from "./CategoriesBox/CategoriesBox";

const Categories = () => {
  return (
    <Container>
      <div className="pt-4 flex items-center justify-between overflow-x-auto">{categories?.map(category=><CategoriesBox key={category?.label} label={category?.label} icon={category?.icon}/>)}</div>
    </Container>
  );
};

export default Categories;
