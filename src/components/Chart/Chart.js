import './Chart.css'
import React from 'react'
import ChartBar from './ChartBar'

function Chart(props) {
    const dataPointValues =props.dataPoints.map(dataPoint => dataPoint.value)
    const totalMax = Math.max(...dataPointValues)
  return (
    <div className='chart'>
        {props.dataPoints.map(dataPoint => 
        <ChartBar 
        key={dataPoint.label}
        value={dataPoint.value}
        maxValue={totalMax}  // 12개월중 제일 큰 값
        label={dataPoint.label}
        />)}
    </div>
  )
}

export default Chart