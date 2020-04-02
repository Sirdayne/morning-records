import React, {useState, useEffect} from 'react'

function useInput(props) {
    const { record } = props
    const { weight } = record
    const [value, setValue] = useState(weight)

    useEffect(() => {
        setValue(weight)
    }, [weight])

    return <input value={value}
                  onChange={e => {
                      setValue(e.target.value)
                    }
                  }
                  type='number'
                  className="use-input" />
}

export default useInput;
