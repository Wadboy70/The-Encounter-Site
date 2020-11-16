import React from 'react';

import ParticleBG from '../../components/ParticleBG/ParticleBG';
import TeamMemberInfo from '../../containers/TeamMemberInfo/TeamMemberInfo';

import LEADERSHIP_TEAM from '../../utils/constants/leadershipTeam';

import './LeaderPage.scss';

const LeaderPage = ({match:{params:{leaderName}}}) => {
    const user = LEADERSHIP_TEAM[leaderName];
    return(
        <ParticleBG className = 'leaderPage' particleClassName = 'leaderPage__particles' >
            <TeamMemberInfo {...user} className = 'leaderPage__memberInfo'/>
        </ParticleBG>
    );
};
export default LeaderPage;