import React from 'react'
import Title from '../components/Title'

function Dashboard(props) {
    const { dates } = props

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
