import getConfig from "next/config";
import { setCache } from "../cache/useContentCache";

export async function useFetch(url: string, params: Object) { 
    
}

export async function fetchContent (type:string, limit?: number | null, params?: Object) {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL
    console.log(process.env);
    try {
        const response = await fetch(`${apiUrl}/${type}?${params}`, {
            method: 'Get',
        })
        if(response.status === 200) {
            setCache(type, response);
            return response;
        }
    }
    catch (error) {
        console.log(error)
    }
}