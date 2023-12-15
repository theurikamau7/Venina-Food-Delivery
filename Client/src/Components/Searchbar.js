import React, {useState} from 'react'
import { CgSearch } from "react-icons/cg";
import './Homepage.css';

function Searchbar() {
    const [Input, setInput] =useState('');
    const handleChange =(value)=>{
        setInput(value)
    }

  return (
    <div className='searchbar'>
        <div className='input-wrapper'>
        <CgSearch id='search-icon'/>
        <input placeholder='Type to search' 
        value={Input} 
        onChange={((e)=> handleChange(e.target.value))}/>
        </div>
        <div>Search Results</div>
      
    </div>
  )
}

export default Searchbar;
