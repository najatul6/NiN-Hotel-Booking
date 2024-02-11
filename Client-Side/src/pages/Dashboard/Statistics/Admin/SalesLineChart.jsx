import { useEffect } from "react"
import { useState } from "react"
import Loader from "../../../../components/Shared/Loader"
import Chart from "react-google-charts"

export const options = {
  title: 'Sales Over Time',
  curveType: 'function',
  legend: { position: 'bottom' },
  series: [{ color: '#F43F5E' }],
}
const SalesLineChart = ({ data }) => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 500)
  }, [])
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Chart
          chartType='LineChart'
          width='100%'
          height='400px'
          data={data}
          options={options}
        />
      )}
    </>
  )
}

export default SalesLineChart