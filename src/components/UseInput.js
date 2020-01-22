import React, {useState} from 'react'

function useInput(props) {
    const { initVal } = props
    const [value, setValue] = useState(initVal)
    return <input value={value} onChange={e => setValue(e.target.value)} type='number' className="use-input" />
}

export default useInput;
