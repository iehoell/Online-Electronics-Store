import React, {useState} from 'react';
import {Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, BarElement, Tooltip, Legend} from 'chart.js';
import {Bar, Line} from 'react-chartjs-2';

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip,
    Legend,
    BarElement
)

function Graphic({active, setActive}) {
    const [active1, setActive1] = useState('')
    const [active2, setActive2] = useState('')
    const [value, setValue] = useState('')
    const options = [
        {label: 'Линейный', value: 1},
        {label: 'Гистограмма', value: 2},
    ]
    function handleSelect(event){
        setValue(event.target.value)
        if(event.target.value == 1){
            l.classList.remove('hidden');
            l.classList.add('visible');
            b.classList.remove('visible');
            b.classList.add('hidden');
        }
        if(event.target.value == 2){
            b.classList.remove('hidden');
            b.classList.add('visible');
            l.classList.remove('visible');
            l.classList.add('hidden');
        }
    }
    const dataBar = {
        labels: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь'],
        datasets: [
            {
                label: 'История цены',
                data: [30499, 32000, 27000, 29000, 30499, 33000],
                backgroundColor: '#FFC93D',
                borderColor: 'orange',
                borderWidth: 1,
            }
        ]
    }
    const optionsBar = {
        scales: {
            y: {
                min: 20000,
                max: 40000
            }
        }
    }
    const dataLine = {
        labels: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь'],
        datasets: [
            {
                label: 'История цены',
                data: [30499, 32000, 27000, 29000, 30499, 33000],
                backgroundColor: '#FFC93D',
                borderColor: 'orange',
                borderWidth: 1,
                pointBorderColor: '#FFC93D',
                fill: false,
                tension: 0.0
            }
        ]
    }
    const optionsLine = {
        plugins: {
            legend: true
        },
        scales: {
            y: {
                min: 20000,
                max: 40000
            }
        }
    }
    let l = document.getElementById('line');
    let b = document.getElementById('bar');
    return(
        <div>
            <select className="graphicSelect" onChange={handleSelect}>
                {options.map(option => (
                    <option value={option.value}>{option.label}</option>
                ))}
            </select>
            <div id='line' className={'visible'}>
                <Line
                    data = {dataLine}
                    options = {optionsLine}
                    style = {{padding: '20px', width: '200px'}}
                />
            </div>
            <div id='bar' className={'hidden'}>
                <Bar
                    data = {dataBar}
                    options = {optionsBar}
                    style = {{padding: '20px', width: '200px'}}
                />
            </div>
        </div>
    )
}

export default Graphic;