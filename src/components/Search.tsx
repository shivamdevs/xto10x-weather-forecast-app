import { useState } from "react";
import { SearchResult, WeatherLocations } from "../api";
import SearchIcon from "../assets/search.svg?react";
import useSearch from "../hooks/useSearch";
import useAppContext from "../context/useAppContext";

function Search() {

    const [query, setQuery, result, loading] = useSearch();
    const [focus, setFocus] = useState<boolean>(false);
    const { setPosition, setInformation } = useAppContext();

    return (
        <div className="inline-flex bg-white rounded shadow-lg h-12 w-full md:max-w-md relative">
            <input
                type="search"
                id="search"
                className="bg-transparent flex-1 pl-3 outline-none rounded-l"
                value={query}
                autoComplete="off"
                onChange={({ target }) => setQuery(target.value)}
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
                placeholder="Search your city here..."
            />
            <label htmlFor="search" className="w-12 h-12 inline-flex justify-center items-center">
                <SearchIcon />
            </label>
            {(focus || query) && <div className="absolute top-full mt-3 bg-white shadow-lg left-0 right-0 rounded-md z-20 overflow-hidden [&>span]:w-full [&>span]:inline-block [&>span]:my-5 [&>span]:text-center">
                {loading
                    ? <span className=""><l-ring size="40" stroke="4" bg-opacity="0" speed="2" color="#2a52be" /></span>
                    : result === null
                        ? <span className="my-5 text-red-600">An unknown error occurred</span>
                        : !query
                            ? <span>Search for a city...</span>
                            : result.length !== 0
                                ? <SearchResult result={result} select={(city) => {
                                    setQuery("");
                                    setInformation({
                                        name: city.name,
                                        state: city.state,
                                        country: city.country,
                                        lat: city.lat,
                                        lon: city.lon,
                                    });
                                    setPosition({
                                        lat: city.lat,
                                        lon: city.lon,
                                    });
                                }} />
                                : <span>No matching result found</span>

                }
            </div>}
        </div>
    )
}

export default Search


export interface SearchResultHook {
    result: SearchResult;
    select: (local: WeatherLocations) => void;
}
function SearchResult({ result, select }: SearchResultHook) {
    return (
        <>
            {result.map(city => <button key={city.lat + city.lon} onClick={() => select(city)} className="border-b border-b-gray-300 last-of-type:border-b-0 px-5 py-3 block w-full hover:bg-blue-100 transition-all text-left">{city.name} {city.state ? ", " + city.state : ""}, {city.country}</button>)}
        </>
    );
}