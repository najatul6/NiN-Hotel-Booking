/* eslint-disable react/prop-types */

import { DateRange } from "react-date-range";


const Calender = ({ value, handleSelect }) => {
  return (
    <DateRange
      rangeColors={['#ff6d01']}
      direction='vertical'
      showDateDisplay={false}
    />
  )
}

export default Calender;
