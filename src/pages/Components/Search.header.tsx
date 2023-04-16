import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import LOGO from '../../assets/logo.png'
import MOON from '../../assets/moon.svg'
import SUN from '../../assets/sun.svg'
import ThemeConsumer from '../../context/ThemeContext'
import SearchResultContextConsumer from '../../context/GoogleAPIContext'
import { useKeydown } from '../useKeydown'

const SearchHeader:React.FC = () => {
    const {Search,setSearch} = SearchResultContextConsumer()
    const {isDark,setIsDark } = ThemeConsumer()
    const [input , setInput] = useState<string>('')
    const HandleSearchUpdate = () => { 
      if(input !== "") setSearch(input)
     }
     useKeydown('Enter',HandleSearchUpdate)
  return (
    <div className={isDark?'dark':''}>
    <div className='dark:bg-darkColor dark:text-white'>
    <header className='py-5 px-3 flex justify-between items-center'>
      <div className='flex items-center flex-1'>
      <Link to='/'>
        <div className='overflow-hidden w-24 sm:w-32 mr-4'>
          <img src={LOGO} alt="google logo"/>
        </div>
      </Link>
      <div className='w-[250px] sm:w-2/3'>
      <input
            type="text"
            placeholder='search'
            className='block mx-auto w-full max-w-[680px] border-2 py-2 px-6 rounded-full active:outline-none focus:outline-none hover:shadow-md dark:bg-btnColor dark:border-none'
            onChange={(e) => { setInput(e.target.value) } }
            defaultValue = {Search}
            />
            
      </div>
      </div>
      <div className='flex items-center'>
      <div
            onClick={() => { setIsDark(!isDark) } }
            className='w-8 overflow-hidden hover:shadow-md rounded-full cursor-pointer'>
            <img src={!isDark ? MOON : SUN} alt="theme logo" className='w-full' />
          </div>
          <div>
          <span className='py-2 px-3 rounded-full bg-orange-500 text-white ml-4'>N</span>
          </div>
      </div>
    </header>
    </div>
    </div>
  )
}
export default SearchHeader