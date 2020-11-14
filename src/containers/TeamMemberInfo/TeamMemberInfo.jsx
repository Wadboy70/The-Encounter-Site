import React from 'react';

import Button from '../../components/Button/Button';
import { removeWhitespace } from '../../utils/helperFunctions';

import './TeamMemberInfo.scss';

const TeamMemberInfo = ({url, description, name}) => {
    return(
        <div className = 'teamMemberInfo'>
            <h1 className = 'teamMemberInfo__name'>{name}</h1>
            <img className = 'teamMemberInfo__image' src={url} alt={name}/>
            <p className = 'teamMemberInfo__description'>{description}</p>
            <Button 
                link = {`/about/${removeWhitespace(name)}`}
                className = 'yellowBG medium'    
            >
                Read More
            </Button>
        </div>
    );
};
export default TeamMemberInfo;