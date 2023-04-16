import React,{createContext,useContext,useState} from 'react'
interface INThemeContext {
    setIsDark : React.Dispatch<React.SetStateAction<boolean>>
    isDark : boolean,
}
const ThemeContext = createContext<INThemeContext>({
    setIsDark:() => {},
    isDark : false,
})
export const ThemeProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    const [isDark , setIsDark] = useState<boolean>(false)
    return (
      <ThemeContext.Provider value={{isDark,setIsDark }}>
        {children}
      </ThemeContext.Provider>
    );
  };
const ThemeConsumer = () => { 
    return useContext(ThemeContext)
 }
export default ThemeConsumer