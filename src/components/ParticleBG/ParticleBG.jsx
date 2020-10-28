import React from 'react';

import Particles from 'react-particles-js';

import './ParticleBG.scss';

const ParticleBG = ({children, className = ''}) => (
    <div className = 'particles'>
        <Particles className = 'particles__BG'/>
        <div className = {`particles__content ${className}`}>
            {children}
        </div>
    </div>
);

export default ParticleBG;