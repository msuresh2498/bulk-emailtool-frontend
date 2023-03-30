import React from 'react'
import { Bar } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

// chart function
const Chart = () => {
    const options = {
        responsive: true,
    };
    // chart bottom labels
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];


    const data = {
        labels,
        datasets: [
            {
                label: 'Users',
                data: [3000, 6000, 8000, 12000, 14000, 16000, 18000],
                backgroundColor: '#2DD096',
            },
        ],
    }
    return (
        <div>
            <div className='Line-chart'>
                <Bar className='Bar' data={data}
                    options={options} >
                </Bar>
            </div>
        </div>
    )
}

export default Chart