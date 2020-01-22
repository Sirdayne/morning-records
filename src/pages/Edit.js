import React from 'react'
import Title from '../components/Title'
import { getDates } from '../store/Dates'

function Edit() {
    const dates = getDates()
    return (
        <div className="dashboard">
            <Title name="Edit Records"></Title>
            {
                dates.map(date =>
                    <div className="day" key={date}>{date}</div>
                )
            }
        </div>
    );
}

export default Edit;
