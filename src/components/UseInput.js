import React, {useState, useEffect} from 'react'
import http from '../services/http';

function useInput(props) {
    const { record, fetchData } = props
    const { weight } = record
    const [value, setValue] = useState(weight)

    function updateDate(date, e) {
        // e.preventDefault();
        const body = {
            ...date,
            weight: value
        }
        if (date.id) {
            http.put(`/records/${date.id}`, body).then(res => {
                console.log(res);
                fetchData();
            })
        } else {
            http.post('/records', body).then(res => {
                console.log(res);
                fetchData();
            })
        }

    }

    useEffect(() => {
        setValue(weight)
    }, [weight])

    return <React.Fragment>
             <input value={value}
                  onChange={e => {
                      setValue(e.target.value)
                    }
                  }
                  type='number'
                  className="use-input" />
             <button className="btn" onClick={(e) => updateDate(record, e)}>update</button>
            </React.Fragment>
}

export default useInput;
