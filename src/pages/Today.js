import React from 'react'
import Title from '../components/Title'
import moment from 'moment'
import UseInput from '../components/UseInput'

function Today(props) {

    const momentToday = moment().format('DD/MM/YYYY')
    const today = {
        date: momentToday,
        weight: localStorage.getItem(momentToday) ? localStorage.getItem(momentToday) : 0
    }
    return (
        <div className="today">
            <Title name="Today"></Title>
            <h2>{today.date}</h2>
            <UseInput day={today} />
        </div>
    );
}

export default Today;
