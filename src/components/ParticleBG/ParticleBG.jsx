import React from 'react';

import Particles from 'react-particles-js';

import './ParticleBG.scss';

const ParticleBG = ({children, className = '', particleClassName = ''}) => (
    <div className = 'particles'>
        <Particles
            className = {`particles__BG ${particleClassName}`}
            params = {{
                particles: {
                    number:{
                        value: 90
                    },
                    lineLinked: {
                        color:  "#535353",
                        width: 2
                    }
                }
            }}    
        />
        <div className = {`particles__content ${className}`}>
            {children}
        </div>
    </div>
);

export default ParticleBG;