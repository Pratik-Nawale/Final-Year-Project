import React, {useState,useCallback} from 'react'
import {Routes,Route,useNavigate} from 'react-router-dom'


const HomePage = () => {
    const [value, setValue] = useState();
    const navigate = useNavigate()
    const hancleJoinRoom = useCallback(() => {
        navigate(`/room/${value}`)
    },[navigate,value])


  return (
    <div>
        <input value={value} onChange={(e) => setValue(e.target.value)}
        type="text" placeholder='Enter Room Code' />
        <button onClick={hancleJoinRoom}>Join</button>
    </div>
  )
}

export default HomePage;