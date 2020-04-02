import React, { useState, useEffect } from 'react'
import Title from '../components/Title'
import moment from 'moment'
import UseInput from '../components/UseInput'

function Today(props) {
    const { dates } = props

    const [ today, setToday ] = useState({
        id: null,
        date: moment().format('DD/MM/YYYY'),
        weight: 0,
        trained: false
    })

    useEffect(() => {
        let found = dates.find(date => date.date === moment().format('DD/MM/YYYY'))
        if (found) {
            setToday(found)
        }
    }, [dates])

    return (
        <div className="today">
            <Title name="Today"></Title>
            <h2>{today.date}</h2>
            <UseInput record={today} />
        </div>
    );
}

export default Today;
