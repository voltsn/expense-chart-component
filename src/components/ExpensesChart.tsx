import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend 
} from "chart.js";

import { Bar } from 'react-chartjs-2'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title, 
    Tooltip, 
    Legend
);

type dataType = Array<{day: string; amount: number;}>;

export default function ExpensesChart (prop: { data: dataType }){
    const { data } = prop;

    const options = {

    }


    const datasets = {
        labels: data.map((dataPoint: {day: string; amount: number;} ) => dataPoint.day),
        datasets:[
            {
                data: data.map((dataPOint: {day: string; amount: number} ) => dataPOint.amount)
            }
        ] 
    }
    
    return (
        <>
        <Bar options={options} data={datasets}/>
        </>
    );
} 