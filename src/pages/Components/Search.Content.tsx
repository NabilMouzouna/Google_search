import { Link } from "react-router-dom"
import ThemeConsumer from "../../context/ThemeContext"
import ResultContent from "./Search.resultContent"
const SearchContent = () => {
  const {isDark,setIsDark } = ThemeConsumer()
  return (
  <main className={isDark?'dark':''}>
      <div className="min-h-screen dark:bg-darkColor">
      <nav className='mx-auto text-gray-500 dark:text-fontDarkColor w-1/2'>
          <Link to='/search' className='mx-4 text-sm pb-3 focus:text-blue-500 focus:border-b-2 focus:border-blue-500'>All</Link>
          <Link to='/videos' className='mx-4 text-sm pb-3 focus:text-blue-500 focus:border-b-2 focus:border-blue-500'>Videos</Link>
          <Link to='/images' className='mx-4 text-sm pb-3 focus:text-blue-500 focus:border-b-2 focus:border-blue-500'>Images</Link>
          <Link to='news' className='mx-4 text-sm pb-3 focus:text-blue-500 focus:border-b-2 focus:border-blue-500'>News</Link>
        </nav>
        <hr className="border-[.02px] border-gray-200 mt-4 w-10/12 mx-auto dark:border-gray-600"/>
      <ResultContent/>
      </div>
    </main>
  )
}

export default SearchContent