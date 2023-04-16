import React,{createContext,useContext,useState} from 'react'
import axios from 'axios'
interface INresultContext {
    isLoading : boolean,
    Search: string,
    setSearch: React.Dispatch<React.SetStateAction<string>>,
    GetResult: () => void,
    result : any

}
const SearchResultContext = createContext<INresultContext>({
    isLoading:false,
    Search :'',
    setSearch : () => { },
    GetResult: () => {},
    result :{},
})



export const SearchContextProvider:React.FC<React.PropsWithChildren> =({children}) => { 
    const [isLoading,setIsLoading] = useState<boolean>(false);
    const [Search,setSearch] = useState<string>('');
    const [result,setResult] = useState<any>()
    const GetResult = async ():Promise<void> => { 
        setIsLoading(true)
            const options = {
            method: 'GET',
            url: 'https://google-web-search1.p.rapidapi.com/',
            params: {query: Search, limit: '20', related_keywords: 'true'},
            headers: {
                'X-RapidAPI-Key': import.meta.env.VITE_GOOGLE_SEARCH_API_KEY,
                'X-RapidAPI-Host': 'google-web-search1.p.rapidapi.com'
            }
            };

           await axios.request(options).then(function (response) {
                setResult(response.data);
            }).catch(function (error) {
                console.error(error);
            });
     }
    return <SearchResultContext.Provider value={{result,GetResult,isLoading,Search,setSearch}}>{children}</SearchResultContext.Provider>
 }
const SearchResultContextConsumer = () => { 
    return useContext(SearchResultContext)
 }
 export default SearchResultContextConsumer