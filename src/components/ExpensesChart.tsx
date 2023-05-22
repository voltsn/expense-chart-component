import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend, 
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
    const currentDay: number = new Date().getDay() - 1;
    const colors = data.map((_, index) => {
        return index === currentDay ? "#76B5BC" : "#EC755D";
    });
    const colorsHovered = data.map( (_,index) => {
        return index === currentDay ? "#B4E0E5" : "#FF9B86";
    });

    const options = {
        scales: {
            y: {
                display: false,
            },
            x: {
                grid: {
                    display: false,
                }
            }
        },
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                displayColors: false,
                caretSize: 0,
                position: 'nearest' as const,
                xAlign: 'center' as const,
                yAlign: 'top' as const,
                callbacks: {
                    title: () => '',
                    label: function(context: any) {
                        // source: chartJS docs
                        let label = context.dataset.label || '';

                        if (label) {
                            label += ': ';
                        }

                        if (context.parsed.y !== null) {
                            label = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(context.parsed.y);
                        }
                        
                        return label;
                    }
                }
            }
        }
    }


    const datasets = {
        labels: data.map((dataPoint: {day: string; amount: number;} ) => dataPoint.day),
        datasets:[
            {
                data: data.map((dataPOint: {day: string; amount: number} ) => dataPOint.amount),
                backgroundColor: colors,
                hoverBackgroundColor: colorsHovered,
                borderRadius: 5,
            }
        ] 
    }
    
    return (
        <>
        <Bar options={options} data={datasets}/>
        </>
    );
} 