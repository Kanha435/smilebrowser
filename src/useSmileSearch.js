import { useEffect, useState } from "react";
// const API_KEY = "AIzaSyDIpOykjQW9Y5dQSkzrn_rQbOH73M4mYTI";
const API_KEY = "AIzaSyBtVknTmiTZH7_90juVDGAMd7eoeXwF1k8"
const SEARCH_ENGINE_ID = "b4c8cccd97b862515";
const useSmileSearch =(val)=>{
    const [data,setData] = useState(null);
    useEffect(()=>{
        const fetchData =  async ()=>{
            fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${SEARCH_ENGINE_ID}&q=${val}`)
                .then((res)=>res.json())
                .then(result=>setData(result));
            }

        fetchData();
        }
    ,[val]);
    return {data};
}
export default  useSmileSearch;