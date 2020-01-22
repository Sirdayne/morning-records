import React from 'react'
import moment from 'moment'
import Title from './Title'

function Dashboard() {
    const dates = getDates()
    return (
        <div className="dashboard">
            <Title name="Dashboard"></Title>
            {
                dates.map(date =>
                    <div className="day" key={date}>{date}</div>
                )
            }
        </div>
    );
}

function getDates() {
    const dates = []
    let initDate = moment('2020-01-01')
    const PERIOD_DAYS = moment().add(15, 'days').diff(initDate, 'days')
    for (let i = 0; i <= PERIOD_DAYS; i++) {
        dates.push(initDate.format('DD/MM/YYYY'))
        initDate.add(1, 'days')
    }
    return dates
}

export default Dashboard;
