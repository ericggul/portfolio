import React, {useState, useEffect} from 'react';
import './DoorPage.scss';
import { motion } from 'framer-motion';
import { useHistory } from 'react-router-dom';
import Zarathustra from "../../assets/Zarathustra.mp3";

import SoundAdjuster from '../../components/SoundAdjuster/SoundAdjuster';

const transition = {duration: 3}


export default function DoorPage() {

    const history = useHistory();
    const [pushed, setPushed] = useState(false);
    const [volume, setVolume] = useState(1);


    const audio: HTMLAudioElement = new Audio(Zarathustra);
    audio.volume = volume;
    audio.play()
    .catch(err=>{
        console.log(err);
    })


    const handlePush = (e: any) =>{
        setPushed(true)
        setTimeout(()=> history.push('main'), 4000);
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
                    onClick={handlePush}
                >
                    <div className="push-box">
                        <div 
                            className="push-text"
                        >PUSH</div>
                    </div>
                </motion.div>
            </div>
{/* 
            <SoundAdjuster /> */}
        </motion.div>
    )
}
