import { API_PATH_SEARCH, SearchResult, api_query } from ".";

async function searchLocal(query: string) {
    const res = await fetch(api_query(API_PATH_SEARCH, ":q:", query));
    return await (res.json() as Promise<SearchResult>);
}

export default searchLocal;