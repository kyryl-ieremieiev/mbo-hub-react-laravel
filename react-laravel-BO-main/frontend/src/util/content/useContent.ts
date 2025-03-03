import { checkCache, setCache } from "../cache/useContentCache";
import { fetchContent } from "../fetch/useFetch";
export async function getContent(type: string, limit?: number, params?: object) {
    // let content: any = await checkCache(type);
    let content: any = null;
    if(!content) {
        content = await fetchContent(type, limit, params);
    }
    return content
}