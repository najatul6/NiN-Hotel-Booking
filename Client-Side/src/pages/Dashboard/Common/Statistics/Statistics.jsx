import { Helmet } from "react-helmet-async";
import AdminStatistics from "../../Statistics/Admin/AdminStatistics";

const Statistics = () => {
  
  return (
    <div>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <AdminStatistics/>
    </div>
  );
};

export default Statistics;
