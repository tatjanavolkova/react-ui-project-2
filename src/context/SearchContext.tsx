import { createContext } from "react";

interface SearchContextInterface {
    value: string;
    setValue: (value: string) => void
}

const SearchContext = createContext<SearchContextInterface>({
    value: '',
    setValue: () => []
})

export default SearchContext;