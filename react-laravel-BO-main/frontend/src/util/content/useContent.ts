import { checkCache, setCache } from "../cache/useContentCache";
import { PaginatedFetch } from "@/util/interface/fetch";
import { fetchContent } from "../fetch/useFetch";

export async function getContent(type: string, params?: URLSearchParams) {
    // let content: any = await checkCache(type);
    let content: any = null;
    if(!content) {
        content = await fetchContent(type, params);
    }
    return content
}   