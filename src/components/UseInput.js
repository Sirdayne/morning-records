import React, {useState} from 'react'

function useInput(props) {
    const { day } = props
    const { weight, date } = day
    const [value, setValue] = useState(weight)
    return <input value={value}
                  onChange={e => {
                      setValue(e.target.value)
                      localStorage.setItem(date, e.target.value)
                    }
                  }
                  type='number'
                  className="use-input" />
}

export default useInput;
