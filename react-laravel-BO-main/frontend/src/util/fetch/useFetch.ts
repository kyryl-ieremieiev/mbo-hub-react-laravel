import getConfig from "next/config";
import { setCache } from "../cache/useContentCache";

export async function fetchContent (type:string, params?: URLSearchParams) {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL
    try {
        const response = await fetch(`${apiUrl}/${type}?${ params?.toString() }`, {
            method: 'Get',
        })
        if(response.status === 200) {
            const content = await response.json();
            setCache(type, JSON.stringify(content));
            return content;
        }
    }
    catch (error) {
        console.log(error)
    }
}