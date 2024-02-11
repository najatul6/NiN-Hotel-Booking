import { Helmet } from "react-helmet-async";
import AdminStatistics from "../../Statistics/Admin/AdminStatistics";
import useRole from "../../../../hooks/useRole";
import GuestStatistics from "../../Statistics/Guest/GuestStatistics";
import HostStatistics from "../../Statistics/Host/HostStatistics";

const Statistics = () => {
  const [role] = useRole();
  return (
    <div>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      {role === "admin" && <AdminStatistics />}
      {role === "host" && <HostStatistics />}
      {role === "guest" && <GuestStatistics />}
    </div>
  );
};

export default Statistics;
