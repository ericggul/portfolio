import  { useState, useEffect } from 'react';
import  useWindowDimensions from './useWindowDimensions';

const useMousePosition  = () => {
    const { width, height} = useWindowDimensions();
    const [mousePosition, setMousePosition] = useState({mouseX: width/2, mouseY: height/2});

    const updateMousePosition = (e : any) => {
        setMousePosition({ mouseX: e.clientX, mouseY: e.clientY})
    }

    useEffect(()=>{
        window.addEventListener("mousemove", updateMousePosition)
        return () => window.removeEventListener("mousemove", updateMousePosition)
    }, [])

    return mousePosition;
}

export default useMousePosition;