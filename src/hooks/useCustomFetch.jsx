import { useState, useEffect } from "react";
import axios from "axios"




const useFetch = (url) => {
    const [fetchData, setFetchData] = useState();



    useEffect(() => {



        const getFetch = async () => {

            const response = await axios.get(url)
            setFetchData(response.data)


        }
        getFetch()

    }, [url]);



    return { fetchData }
}






export default useFetch