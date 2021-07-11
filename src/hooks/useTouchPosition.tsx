import  { useState, useEffect } from 'react';
import  useWindowDimensions from './useWindowDimensions';

const useTouchPosition  = () => {
    const { width, height} = useWindowDimensions();
    const [touchPosition, settouchPosition] = useState({touchX: width/2, touchY: height/2});

    const updatetouchPosition = (e : any) => {
        settouchPosition({ touchX: e.clientX, touchY: e.clientY})
    }

    useEffect(()=>{
        window.addEventListener("touchmove", updatetouchPosition)
        return () => window.removeEventListener("touchmove", updatetouchPosition)
    }, [])

    return touchPosition;
}

export default useTouchPosition;