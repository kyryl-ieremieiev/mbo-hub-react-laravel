import { checkCache, setCache } from "../cache/useContentCache";
import { fetchContent } from "../fetch/useFetch";
export async function getContent(type: string, limit?: number, params?: URLSearchParams) {
    // let content: any = await checkCache(type);
    let content: any = null;
    if(!content) {
        content = await fetchContent(type, limit, params);
    }
    return content
}   