import { useEffect, useState } from 'react'
import './App.css';
import axios from 'axios'
import Issues  from './Components/Issues';

function App() {
  const[users,setUsers]=useState([])


  useEffect(()=>{
    const fetchApi = async ()=>{
      let response = await axios.get("https://api.github.com/repositories/6427813/issues")
      let res = response.data;
      setUsers(res)
    }  
    fetchApi()
  },[])

return (
    <>
      <Issues users = {users}/>
    </>
  );
}

export default App;
