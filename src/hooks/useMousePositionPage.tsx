import  { useState, useEffect } from 'react';
import  useWindowDimensions from './useWindowDimensions';

const useMousePositionPage  = () => {
    const { width, height } = useWindowDimensions();
    const [mousePosition, setMousePosition] = useState({mousePageX: width/2, mousePageY: height/2});

    const updateMousePosition = (e : any) => {

        setMousePosition({ mousePageX: e.pageX, mousePageY: e.pageY})
    }

    useEffect(()=>{
        window.addEventListener("mousemove", updateMousePosition)
        return () => window.removeEventListener("mousemove", updateMousePosition)
    }, [])

    return mousePosition;
}

export default useMousePositionPage;