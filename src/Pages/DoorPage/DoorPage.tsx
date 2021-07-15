import React, { useState, useEffect, useReducer } from 'react';
import './DoorPage.scss';
import { motion } from 'framer-motion';
import { useHistory } from 'react-router-dom';
import Zarathustra from "../../assets/Zarathustra.mp3";

import SoundAdjuster from '../../components/SoundAdjuster/SoundAdjuster';

const transition = {duration: 3}

const reducer = (sec: any, action: any) => {
    switch(action.type){
        case "Increment":
            return sec + 1;
        default: 
            return sec;
    }
}

export default function DoorPage() {

    const history = useHistory();
    const [pushed, setPushed] = useState(false);
    const [volume, setVolume] = useState(1);
    const [script, setScript] = useState(0);

    const script_array = [
        "",
        "Monolith, a perfect geometrical structure",
        "Represents the human evolution on Stanley Kubrick's film",
        "This Nietzsche-tic representation of evolution should be well replicated",
        "When highlighting the functionality of semiotics in the modern civilization.",
        "2022 MHCI Candidate, Jeanyoon Choi",
        "Push the right door to enter"
    ];

    useEffect(()=> {
        setTimeout(()=> {
            setScript(1)
        }, 30000)
        setTimeout(()=> {
            setScript(2)
        }, 40000)
        setTimeout(()=> {
            setScript(3)
        }, 47000)
        setTimeout(()=> {
            setScript(4)
        }, 54000)
        setTimeout(()=> {
            setScript(5)
        }, 63000)
        setTimeout(()=> {
            setScript(6)
        }, 73000)
    }, [])



    //Second Calculation
    const [sec, dispatch] = useReducer(reducer, 0);

    useEffect(()=>{
        setInterval(()=> {
            dispatch({type: "Increment"})
        }, 1000)
    }, [])

    const handlePush = (e: any) =>{
        if(sec > 60){
            setPushed(true)
            setTimeout(()=> history.push('main'), 0);
        }
    }

    return (
        <motion.div 
            className="App"
            initial='initial'
            animate='animate'
            exit='exit'
        >

            <div className="door-container left-door" />
            <div 
                className="door-container right-container"
                style={{background: pushed ? 'white': '0' }}
            >
                <motion.div 
                    exit={{ 
                        width: '100%',
                        opacity: 0 
                    }}
                    transition = {transition}
                    className={pushed ? "right-door-pushed" : "right-door"}
                    style = {{cursor: `${script >4 ? "pointer" : "wait"}`}}
                    onClick={handlePush}
                >
                    <div className="push-box">
                        <div 
                            className="push-text"
                        >PUSH</div>
                    </div>
                </motion.div>
            </div>

            <div className="subtitle">
                {/* {sec} */}
                {script_array[script]}
            </div>
{/* 
            <SoundAdjuster /> */}
        </motion.div>
    )
}
