import React,{ useEffect } from 'react'


type FUNCTION = () => void ;
export const useKeydown = (key:string,fct:FUNCTION):void => { 
       useEffect(() => { 
          const handleKeyPress = (event: KeyboardEvent) => { 
           if(event.key === key) return fct();
           }
          document.addEventListener('keydown',handleKeyPress)
          return () => { document.removeEventListener('keydown',handleKeyPress) }
         },[key,fct])
 }