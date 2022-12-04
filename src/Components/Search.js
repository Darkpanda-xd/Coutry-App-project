import React, { useEffect, useState } from 'react'

const Search = (props) => {
    const [searchCountry,setSearchCountry]=useState("")
    const handelChange = (e)=>{
        setSearchCountry(e.target.value)
        
    };

    useEffect(()=>{
       props.onSearch(searchCountry)
    },[searchCountry])
    
   
  return (
    <div style={{textAlign:'center'}}>
      <input type='text' placeholder="Search Country" value={searchCountry} onChange={handelChange}/>
    </div>
  )
}

export default Search
