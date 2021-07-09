import  { useState, useEffect } from 'react';

const useWindowDimensions  = () => {
    const [dimensions, setDimensions] = useState({width: window.innerWidth, height: window.innerHeight});

    const updateDimensions = (e : any) => {
        setDimensions({ width: window.innerWidth, height: window.innerHeight })
    }

    useEffect(()=>{
        window.addEventListener("resize", updateDimensions)
        return () => window.removeEventListener("mousemove", updateDimensions )
    }, [])

    return dimensions;
}

export default useWindowDimensions;