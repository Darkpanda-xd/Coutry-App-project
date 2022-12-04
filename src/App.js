import React,{useState,useEffect} from 'react'
import Countries from './Components/Countries'
import './App.css'
import Search from './Components/Search'

//data fetching using asynchronous way  


const url = 'https://restcountries.com/v3.1/all'

const App = () => {
    const [countries,setCountries]=useState([])
    const [isLoading,setIsLoading]=useState(true)
    const [error,setError]=useState(null)
    const [filteredCountries,setFilteredCountries]=useState(countries)

    const fetchData = async(url)=>{
       setIsLoading(true)
        try{
            const response = await fetch(url)
            const data = await response.json()
             setCountries(data)
             setFilteredCountries(data)
             setIsLoading(false)
             setError(null)
             
             
        }catch(error){
            setIsLoading(false)
            setError(error)
        }
        
    }

    useEffect(()=>{
        fetchData(url)
    },[])

    const handelRemoveCountry=(name)=>{
     const filter = filteredCountries.filter((country)=>country.name.common !== name
     )
     setFilteredCountries(filter)
    }

    const handelSearch=(searchValue)=>{
     
      let value = searchValue.toLowerCase();
     const newCountry=countries.filter((country)=>{
       const name = country.name.common.toLowerCase();
       return name.startsWith(value)

      });
    setFilteredCountries(newCountry)
    }
  return (
    <>
    <h1>Country App</h1>
    <Search onSearch={handelSearch}/>
    {isLoading && <h3>Loading....</h3> }
    {error&& <h3>{error.message}</h3>}
    {countries && <Countries countries={filteredCountries} onRemoveCountry={handelRemoveCountry}/>}
    
      
    </>
  )
}

export default App
