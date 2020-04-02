import React from 'react'
import Title from '../components/Title'
import UseInput from '../components/UseInput'

function Edit(props) {
    const { dates } = props

    return (
        <div className="dashboard">
            <Title name="Edit Records"></Title>
            {
                dates.map(date =>
                    <div className="day" key={date.date}>
                        {date.date}
                        <UseInput day={date} />
                    </div>
                )
            }
        </div>
    );
}

export default Edit;
