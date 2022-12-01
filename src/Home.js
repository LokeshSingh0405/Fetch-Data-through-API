import React , {useState , useEffect} from "react";
import FetchApi from "./API/FetchApi";
import { useNavigate } from "react-router-dom";

let style = {
  margin: "5px",
  font: "bold"
}

export const Home = () => {
    const [data , setData] = useState([])
    const [random_data , setRandome] = useState([])
    const [first, setfirst] = useState("")
    const [dataID, setDataId] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        fetch('https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=iWfQgU9tIgqS1uksbCvdjAvfe10BJHiUmF0UMBYd')
        .then((response) => response.json())
        .then((data) => setData(data.near_earth_objects))
    },[])


    const showData = (e)=>{
      setfirst(e.target.value)
      
    }

    const onSubmission = (e)=>{
      e.preventDefault();
      // console.log("Showing data .....")
      for (let index = 0; index < data.length ; index++) {
        if(first === data[index].id){
          navigate("IdData" , {state : data[index]})
          // console.log(data)
        }
         
      }
  }


    const onRandomSub = (e)=>{
        e.preventDefault();
        
        const len = data.length
        // console.log(data)
        const output = Math.floor(Math.random()*len)
        setRandome(data[output])        

    };
    // console.log("");
  
  return (
    <div style={{ width :'100%'}} className = "container">
        <div style={{ width :'5%'}}>
            <div className="mb-3" >
            <div style={{display : "flex"}}>
                      
            <label htmlFor="exampleInputEmail1" className="form-label" style={style}>
                ID:- 
            </label>
            
            <input
                type="text"
                className ="mt-1 " 
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={showData}
            />
            </div>
          </div>
        </div>
      <form >
        <button type="submit" className  = {"btn btn-primary"}  onClick={(e)=>onSubmission(e)}>
          Submit
        </button>
        <div>&nbsp;</div> 
        <button type="submit" className ="btn btn-dark" onClick={(e)=> onRandomSub(e)}>
          Random Asteroid
        </button>
      </form>
      <div>
        &nbsp;
      </div>
        
      
      <div>
        <ul className ="container">
          <li > Id:{random_data.id}</li>
          <li > Name: {random_data.name}</li>
          <li >Designation{random_data.designation}</li>
          <li >Alternate Name :{random_data.name_limited}</li>
          <li >URL :{random_data.nasa_jpl_url}</li>
      </ul>
      </div>
      
    </div>
  );
};



