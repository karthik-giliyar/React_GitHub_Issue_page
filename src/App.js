import { useEffect, useState } from 'react'
import './App.css';
import axios from 'axios'
import Issues  from './Components/Issues';

function App() {
  const[users,setUsers]=useState([])
  const[start,setStart]=useState(0)
  const[pageCount,setPageCount]=useState(1)

  useEffect(()=>{
    const fetchApi = async ()=>{
      let response = await axios.get("https://api.github.com/repositories/6427813/issues")
      let res = response.data;
      setUsers(res)
    }  
    fetchApi()
  },[])

  let copyData =[]
  let currentData = []
  let totalNoOfPage = Math.ceil(users.length/10)

  const next = ()=>{
      if(pageCount<totalNoOfPage){
        setPageCount(prev =>prev+1)
        setStart(prev=>prev+10)
      }
  }


  const prev = ()=>{
    if(pageCount>1){
      setPageCount(prev =>prev-1)
      setStart(prev=>prev-10)
    }
  }

  copyData = [...users]
  currentData = copyData.splice(start,10)
  
return (
    <>
      <Issues users = {currentData} next={next} prev={prev}/>
    </>
  );
}

export default App;
