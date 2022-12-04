import React,{useState,useEffect} from 'react'

const useHooks = (url) => {
    const [countries,setCountries]=useState([])
    const [isLoading,setIsLoading]=useState(true)
    const [error,setError]=useState(null)

    const fetchData = async(url)=>{
       setIsLoading(true)
        try{
            const response = await fetch(url)
            const data = await response.json()
             setCountries(data)
            
             setIsLoading(false)
             setError(null)
             
             
        }catch(error){
            setIsLoading(false)
            setError(error)
        }
        
    }

    useEffect(()=>{
        fetchData(url)
    },[countries])
return {countries,isLoading,error}
}

export default useHooks
