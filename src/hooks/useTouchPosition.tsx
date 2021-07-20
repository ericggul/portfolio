import  { useState, useEffect } from 'react';
import  useWindowDimensions from './useWindowDimensions';

const useTouchPosition  = () => {

    const [touchPosition, settouchPosition] = useState({touchX: 100, touchY: 100});

    const updatetouchPosition = (e : any) => {
        settouchPosition({ touchX: e.changedTouches[0].clientX, touchY: e.changedTouches[0].clientY})
    }

    useEffect(()=>{
        window.addEventListener("touchmove", updatetouchPosition)
        return () => window.removeEventListener("touchmove", updatetouchPosition)
    }, [])

    return touchPosition;
}

export default useTouchPosition;