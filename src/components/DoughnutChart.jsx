import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import {Chart as ChartJS} from 'chart.js/auto'

export const DoughnutChart = () => {

  const data = {
    datasets: [{
      label:'VOTES',
      data:[8400000, 160512222]
    }],
    labels: ['REJECTED VOTES', 'ACCEPTED VOTES']
  }

  return (
    <div style={{padding:'5%'}} className='text-left text-sm text-bold'>
      <Doughnut data={data}/>
      <div className='lg:ml-10 mt-5'>
        <span>TOTAL VOTES</span><br/>
        <span style={{fontWeight:'700'}}>168,912,222</span>
      </div>
    </div>
  )
}
