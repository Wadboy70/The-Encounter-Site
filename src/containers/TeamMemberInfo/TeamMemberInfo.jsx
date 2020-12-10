import React from 'react';

import './TeamMemberInfo.scss';

const TeamMemberInfo = ({url, description, name, className = ''}) => {
    return(
        <div className = {`teamMemberInfo ${className}`}>
            <img className = 'teamMemberInfo__image' src={url} alt={name}/>
            <h1 className = 'teamMemberInfo__name'>{name}</h1>
            <p className = 'teamMemberInfo__description'>{description}</p>
        </div>
    );
};
export default TeamMemberInfo;