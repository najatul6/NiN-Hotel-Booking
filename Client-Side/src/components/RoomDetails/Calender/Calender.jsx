import { DateRange } from "react-date-range";

const Calender = ({ value }) => {
  console.log(value)
  return (
    <DateRange
    ranges={[value]}
    rangeColors={["#ff6d01"]}
    direction="vertical"
    showDateDisplay={false}
    />
  );
};

export default Calender;
