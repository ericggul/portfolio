import React from 'react';
import './SoundAdjuster.module.scss';

function SoundAdjuster() {
    return (
        <div className="sound">

            <input type="range" min="0" max="1" value="1" step="0.01" className="adjust" />
        </div>
    )
}

export default SoundAdjuster;
