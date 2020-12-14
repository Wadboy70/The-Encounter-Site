import React from 'react';
import Button from '../../components/Button/Button';

import './TeamMemberInfo.scss';

const TeamMemberInfo = ({url, description, name, link, className = ''}) => {
    return(
        <div className = {`teamMemberInfo ${className}`}>
            <Button link = {link? link : undefined} className = 'transparent teamMemberInfo__button'>
                <img className = 'teamMemberInfo__image' src={url} alt={name}/>
            </Button>
            <h1 className = 'teamMemberInfo__name'>{name}</h1>
            <p className = 'teamMemberInfo__description'>{description}</p>
        </div>
    );
};
export default TeamMemberInfo;