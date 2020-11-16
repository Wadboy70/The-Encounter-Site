import React from 'react';

import HeaderBacking from '../../components/HeaderBacking/HeaderBacking';
import TeamMemberInfo from '../TeamMemberInfo/TeamMemberInfo';
import LEADERSHIP_TEAM from '../../utils/constants/leadershipTeam.js'

import './AboutLeadershipSection.scss';

const AboutLeadershipSection = () => {
    
    return(
        <div className = 'aboutLeadershipSection'>
            <HeaderBacking className = 'aboutLeadershipSection__header'>
                <span>
                    Our Team
                </span>
            </HeaderBacking>
            <div className = 'aboutLeadershipSection__leaders'>
                {
                    Object.keys(LEADERSHIP_TEAM).map((leader, index) => {
                        let leaderVal = LEADERSHIP_TEAM[leader];
                        return(
                            <TeamMemberInfo key = {index} param = {leader} {...leaderVal}/>
                        );
                    })
                }
            </div>
        </div>
    );
};

export default AboutLeadershipSection;