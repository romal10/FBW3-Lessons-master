import React , {useState , useEffect} from 'react'
import './App.css';

 const  AppHooks= ( ) =>  {
    const [personInfo , setPersonInfo] = useState([]);
    useEffect( ()=> {
     // the same code inside componentDidMount
     let initialPersonInfos = [];
     fetch('https://swapi.co/api/people/')
     .then(res => res.json())
     .then(data => {
       initialPersonInfos = data.results;
       console.log('data : ',data)
       setPersonInfo(initialPersonInfos)
         
     } )
     
    },[] )
    
    let allData = personInfo.map((item)=> {
        return (
          <div className="card card-1">
            <h3> <b>Name : </b>  <span> {item.name} </span></h3>
            <h3> Height :<span>{item.height} </span> cm</h3>
            <h3> Weight :  <span>{item.mass} </span> kg</h3>          
          </div>
        )
      })

    return (
        <div  className="App">
            <div className="App-header"> Starwars data</div>
            {allData}
      </div>
    )
}


export default AppHooks;