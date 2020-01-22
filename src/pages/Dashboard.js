import React from 'react'
import Title from '../components/Title'
import { getDates } from '../store/Dates'

function Dashboard() {
    const dates = getDates()
    return (
        <div className="dashboard">
            <Title name="Dashboard"></Title>
            {
                dates.map(date =>
                    <div className="day" key={date.date}>
                        {date.date}
                        <span className="day-weight">{date.weight}</span>
                    </div>
                )
            }
        </div>
    );
}

export default Dashboard;
