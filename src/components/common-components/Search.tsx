import React, {useState} from 'react';
import {useMailingsFilter} from "../stores/useMailingsFilter";
import {useClientFilter} from "../stores/useClientFilter";

type Props = {
    type: string
}
const Search = ({type}: Props) => {
    const {search_string, setSearchString} = type === "messages"?useMailingsFilter():useClientFilter();
    const [searchValue, setSearchValue] = useState(search_string);
    const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

    const handleSearchChange = (value: string) => {
        timeoutId && clearTimeout(timeoutId);
        setSearchValue(value);
        const timeout = setTimeout(() => {
            setSearchString(searchValue);
        }, 1000);
        setTimeoutId(timeout);
    }

    return (
        <div
            className="w-full h-[45%] px-7 py-5 flex flex-col justify-center bg-white border-4 border-solid border-cyan-800/20 rounded-2xl">
            <input
                type="text"
                placeholder="Поиск"
                className="w-full"
                value={search_string}
                onChange={(e) => handleSearchChange(e.target.value)}
            />
        </div>
    );
};

export default Search;
