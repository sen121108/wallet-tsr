import axios from "axios";
import { useEffect, useState } from "react";


export const  GetApiItem = ():Object => {
    const [items, setItems] = useState([])
    useEffect(() => {
        const fetchData = async() => {
            const url = 'http://localhost:8888/';
            await axios.get(url).then((responce) => {
                setItems(responce.data)
            }).catch((error) => {
                console.log(error.log);
            })
            return items        
        }
        fetchData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    return items
}