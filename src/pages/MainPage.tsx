
import LOGO from '../assets/logo.png'
import MOON from '../assets/moon.svg'
import SUN from '../assets/sun.svg'
import {NavLink,useNavigate} from 'react-router-dom'
import SearchResultContextConsumer from '../context/GoogleAPIContext'
import {useKeydown} from './useKeydown'
import ThemeConsumer from '../context/ThemeContext'
import { useState } from 'react'
const MainPage = () => {
//VARIABLES :
    const {setSearch} = SearchResultContextConsumer()
    const {isDark,setIsDark} = ThemeConsumer()
    const [Input,setInput] = useState<string>('')
    const navigate = useNavigate()
//FUNCTIONS :
    const handleSearch = () => { 
      if(Input !== '')  {
        setSearch(Input); 
        navigate('/search')
      }
    }
    useKeydown('Enter',handleSearch)
  return (
    <main className={isDark? 'dark':''}>
      <div className='duration-75 h-screen dark:bg-darkColor dark:text-white'>
      <header>
        <nav className='p-4 text-right flex items-center justify-end'>
          <NavLink className='text-sm px-2 hover:underline' to="https://mail.google.com/mail/?tab=rm&ogbl">Gmail</NavLink>
          <NavLink className='text-sm px-2 hover:underline' to="https://www.google.co.ma/imghp?hl=en&tab=ri&ogbl">Images</NavLink>
          <div
            onClick={() => { setIsDark(!isDark) } }
            className='w-7 overflow-hidden ml-2 hover:shadow-md rounded-full cursor-pointer'>
            <img src={!isDark ? MOON : SUN} alt="theme logo" className='w-full' />
          </div>
          <span className='py-2 px-3 rounded-full bg-orange-500 text-white ml-8'>N</span>
        </nav>
      </header>

      <section className='h-4/5 flex align-center justify-center flex-col'>
        <div className='w-[272px] mx-auto'>
          <img src={LOGO} alt="logo" />
        </div>
        <div className=' w-screen my-6'>
          <input
            type="text"
            placeholder='search'
            className='dark:border-1 dark:border-fontDarkColor block mx-auto  max-w-[650px] w-11/12 border- border-2 py-3 px-6 rounded-full active:outline-none focus:outline-none hover:shadow-md dark:bg-transparent dark:hover:bg-btnColor dark:hover:border-btnColor'
            onChange={(e) => { setInput(e.target.value) } }
            value={Input}
             />
        </div>
        <div className='mx-auto'>
          <button
            className='mx-2 text-sm bg-activeColor px-4 py-2 rounded-lg hover:shadow-md dark:bg-btnColor'
            onClick={(e) => {
              e.preventDefault()
              handleSearch()
            } }
          >Google Search</button>
          <a href='https://www.google.com/doodles' className='mx-2  hover:shadow-md text-sm bg-activeColor px-4 py-2 rounded-lg dark:bg-btnColor'>I'm Feeling Lucky</a>
        </div>
      </section>
    </div></main>
  )
}

export default MainPage