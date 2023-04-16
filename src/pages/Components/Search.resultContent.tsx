import SearchResultContextConsumer from "../../context/GoogleAPIContext"
import React,{ useEffect,useState } from "react"
import {useLocation} from 'react-router-dom'
const ResultContent = () => {
    const location = useLocation()
    const {isLoading,GetResult,result,Search} = SearchResultContextConsumer()
    useEffect(() => { 
        GetResult()
     },[Search,isLoading])
    switch (location.pathname) {
        case '/search':
            return <div className="w-11/12 sm:w-9/12 max-w-[800px] mx-auto my-4 h-full" >
                {
                    result?.results.map((res:any) => { 
                        if(result === undefined || null) return;
                        return (
                        <div key={res.position} className='py-2'>
                             <a href={res.url} className='text-blue-900 dark:text-blue-500 font-semibold'>{res.title}</a>
                             <h6 className="text-gray-400 text-xs">{res.url}</h6>
                             <p className="text-sm dark:text-fontDarkColor py-1">{res.description}</p>
                        </div>
                        )
                     })
                }
            </div>
        case '/images':
            return <div className="grid md:w-8/12 mx-auto p-3 grid-cols-3 max-md:grid-cols-3 max-sm:grid-cols-2 gap-3 text-center dark:text-fontDarkColor">
                {
                    result?.related_keywords.keywords.map((ref:any) => { 
                        if(ref.knowledge === null || ref.knowledge.image === null) return
                                return (
                                    <div key={ref.position}>
                                        <div>
                                            <img className="w-full" src={ref.knowledge.image} alt={ref.knowledge.title} />
                                        </div>
                                        <h1>{ref.knowledge.title}</h1>
                                    </div>
                                )
                     })
                }
            </div>
        default:
            return <div className="h-40 grid place-content-center dark:text-fontDarkColor">unfortenately this API doesn't provide this service anymore 😥</div>;
    }
    
}
export default ResultContent
