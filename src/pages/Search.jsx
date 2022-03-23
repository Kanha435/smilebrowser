import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import Mic from '@mui/icons-material/Mic';
import Button from '@mui/material/Button';
import '../css/Search.css';
import { useNavigate } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { actionType } from '../reducer';
function Search({hidden}) {
    // console.log(useStateValue());
    const [{},dispatch] = useStateValue();
    let navigate = useNavigate(); 
    const [input , setinput] = useState("");
    const search=(e)=>{
        e.preventDefault();
        console.log("Input value ->>>> ",input );
        dispatch({
            type: actionType.Set_Search_Value,
            val : input,
        })
        navigate('/searchpage');
    }
  return (
    <form className="search">
        <div className="search-input">
            <SearchIcon className='search-input-icon'/>
            <input type="text" value={input} onChange={e=>setinput(e.target.value)} placeholder="Search Smile or type URL" />
            <Mic className='search-mic-icon'/>
        </div>
 { !hidden ? 
        <div className="search-button">
            <Button type='submit' variant="outlined" onClick={search}>Smile Search</Button>
            <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
        :
        <div className="search-button" style={{display:"none"}}>
            <Button type='submit' variant="outlined" onClick={search}>Smile Search</Button>
            <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
}
    </form>
  )
}

export default Search