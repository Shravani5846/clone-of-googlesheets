import { useEffect, useState } from "react";


const useFetch = (request) => {

    const [data , setdata] = useState(null);
    const [pending , setpending] = useState(true);
    const [error , seterror] = useState(null);


    useEffect (()=>{

        setTimeout(()=>{

            fetch(request)
            .then((res)=> {                       //here res is response its not a parameter
                if(res.ok == false)
                {
                    throw Error("Data not Found , please try for different data")
                }
                return res.json()})  //this is like another promise, this can be resolved
            .then((recievedData)=>{setdata(recievedData); setpending(false)})
            .catch((error)=>{seterror(error.message)})
             setpending(false);
    },2000)

    
    },[data])

    return (  {data , pending , error} );
}
 
export default useFetch;