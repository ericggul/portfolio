import  { useState, useEffect } from 'react';
import  useWindowDimensions from './useWindowDimensions';

const useScrollPosition  = () => {
    const { width, height} = useWindowDimensions();
    const [scrollPosition, setScrollPosition] = useState(1);

    const handleScroll = (e : any) => {
        setScrollPosition(Math.floor(window.pageYOffset/height) + 1);
    }
    console.log(window.pageYOffset);
    useEffect(()=>{
        document.getElementsByClassName('mainbox')[0].addEventListener("scroll", handleScroll, true)
        return () => document.getElementsByClassName('mainbox')[0].removeEventListener("scroll", handleScroll, true)
    }, [])

    return scrollPosition;
}

export default useScrollPosition;