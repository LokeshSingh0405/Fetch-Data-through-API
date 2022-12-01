import React, { useEffect, useState } from 'react'

export default function FetchApi() {

   const [data, setData] = useState([]); 
    

  // const apiGet = ()=>{
  //   fetch('https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=iWfQgU9tIgqS1uksbCvdjAvfe10BJHiUmF0UMBYd')
  //   .then((response) => response.json())
  //   .then((data) => {
  //       console.log(data.near_earth_objects);
  //       setData(data.near_earth_objects);
  //       // console.log() 
  //   });

  // }

  useEffect(() => {

  }, [])
  

  // return (
  //   <div>
  //       MY API <br />
  //       <button onClick={apiGet}>Fetch API</button>
  //       <br/>
  //       {/* <pre>{JSON.stringify(data,null,2)}</pre         */}
  //       <div>
  //           <ul>
  //              {data.map((item) => {
  //               return (
  //               <li >
  //                   {item.id}  
  //                   {item.name}    
  //               </li>
  //               )  
  //              })}
  //           </ul>
  //       </div>
    
  //   </div>
  // );

}
