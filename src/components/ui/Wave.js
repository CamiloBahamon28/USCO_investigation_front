import React from 'react';

import img1 from '../img/wave/wave-top.png'
import img2 from '../img/wave/wave-mid.png'
import img3 from '../img/wave/wave-bot.png'
import './css/wave.css'

export const Wave = () => {
    return (
        <div>
            <div className="waveWrapper waveAnimation">
                <div className="waveWrapperInner bgTop">
                    <div className="wave waveTop" style={{backgroundImage: 'url(' + img1 + ')'}}/>
                </div>
                <div className="waveWrapperInner bgMiddle">
                    <div className="wave waveMiddle" style={{backgroundImage: 'url(' + img2 + ')'}}/>
                </div>
                <div className="waveWrapperInner bgBottom">
                    <div className="wave waveBottom" style={{backgroundImage: 'url(' + img3 + ')'}}/>
                </div>
            </div>
        </div>
    );
};


