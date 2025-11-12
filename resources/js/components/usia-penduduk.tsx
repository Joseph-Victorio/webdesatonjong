import {
    BarElement,
    CategoryScale,
    Chart as ChartJS,
    ChartOptions,
    Legend,
    LinearScale,
    Tooltip,
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Legend,
    ChartDataLabels,
);

interface Props {
    labels: string[];
    male: Array<number | null>;
    female: Array<number | null>;
}

const UsiaPenduduk = ({ labels, male, female }: Props) => {
    const reversedMale = male.map((v) => (v ?? 0) * -1);
    const fixedFemale = female.map((v) => v ?? 0);

    const data = {
        labels,
        datasets: [
            {
                label: 'Laki-laki',
                data: reversedMale,
                backgroundColor: '#3B82F6',
            },
            {
                label: 'Perempuan',
                data: fixedFemale,
                backgroundColor: '#EC4899',
            },
        ],
    };

    const options: ChartOptions<'bar'> = {
        responsive: true,
        maintainAspectRatio: false,
        indexAxis: 'y',
        plugins: {
            legend: { position: 'top' },
            tooltip: {
                callbacks: {
                    label: (context) =>
                        `${context.dataset.label}: ${Math.abs(context.parsed.x ?? 0)}`,
                },
            },
            datalabels: {
                formatter: (_value, ctx: any) => {
                    const parsed = ctx.parsed;
                    let value = 0;

                    // Horizontal bar chart: x contains the value
                    if (parsed && typeof parsed.x === 'number') {
                        value = parsed.x;
                    } else if (ctx.dataset?.data?.[ctx.dataIndex] != null) {
                        value = ctx.dataset.data[ctx.dataIndex];
                    }

                    return Math.abs(value);
                },
                color: '#000',
                font: { size: 10, weight: 'bold' },
                anchor: (ctx: any) => {
                    const parsed = ctx.parsed;
                    let value = 0;
                    if (parsed && typeof parsed.x === 'number') {
                        value = parsed.x;
                    } else if (ctx.dataset?.data?.[ctx.dataIndex] != null) {
                        value = ctx.dataset.data[ctx.dataIndex];
                    }
                    return value < 0 ? 'start' : 'end';
                },
                align: (ctx: any) => {
                    const parsed = ctx.parsed;
                    let value = 0;
                    if (parsed && typeof parsed.x === 'number') {
                        value = parsed.x;
                    } else if (ctx.dataset?.data?.[ctx.dataIndex] != null) {
                        value = ctx.dataset.data[ctx.dataIndex];
                    }
                    return value < 0 ? 'right' : 'left';
                },
            },
        },
        scales: {
            y: { ticks: { font: { size: 14 } } },
            x: {
                ticks: {
                    callback: (value) => Math.abs(Number(value)),
                    font: { size: 12 },
                },
                grid: { drawOnChartArea: false },
            },
        },
    };

    return (
        <div className="h-[400px] px-10 mt-10">
            <Bar data={data} options={options} />

            
        </div>
    );
};

export default UsiaPenduduk;
