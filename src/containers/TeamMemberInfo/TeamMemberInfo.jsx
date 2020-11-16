import React from 'react';

import Button from '../../components/Button/Button';

import './TeamMemberInfo.scss';

const TeamMemberInfo = ({url, description, name, param = '', className = ''}) => {
    return(
        <div className = {`teamMemberInfo ${className}`}>
            <img className = 'teamMemberInfo__image' src={url} alt={name}/>
            <h1 className = 'teamMemberInfo__name'>{name}</h1>
            <p className = 'teamMemberInfo__description'>{description}</p>
            <Button 
                link = {`/about/${param}`}
                className = 'yellowBG medium'    
            >
                Read More
            </Button>
        </div>
    );
};
export default TeamMemberInfo;