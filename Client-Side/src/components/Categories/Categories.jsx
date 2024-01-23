
import { categories } from "../../Utils/categoriesData";
import Container from "../Shared/Container";
import CategoriesBox from "./CategoriesBox/CategoriesBox";

const Categories = () => {
  return (
    <Container>
      <div>{categories?.map(category=><CategoriesBox key={category.label}/>)}</div>
    </Container>
  );
};

export default Categories;
