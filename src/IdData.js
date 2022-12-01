import React from 'react'
import { useLocation } from 'react-router-dom'

let form = {
 margin : "250px"   
}

export default function IdData() {
    const location = useLocation()
    console.log(location.state)
  return (
    <div className='container'>
        <div>
  <ul className="list-group" style={form}>
  <li className="list-group-item">{location.state.id}</li>
  <li className="list-group-item">{location.state.name}</li>
  <li className="list-group-item">{location.state.name_limited}</li>
  <li className="list-group-item">{location.state.nasa_jpl_url}</li>
  <li className="list-group-item">{location.state.designation}</li>
</ul>
    </div>
</div>    
  )
}
