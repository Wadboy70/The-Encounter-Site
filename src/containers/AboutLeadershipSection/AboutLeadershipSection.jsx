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
                    Our Leadership
                </span>
            </HeaderBacking>
            <div className = 'aboutLeadershipSection__leaders'>
                {
                    LEADERSHIP_TEAM.map(leader => {
                        return(
                            <TeamMemberInfo key = {leader.name} {...leader}/>
                        );
                    })
                }
            </div>
        </div>
    );
};

export default AboutLeadershipSection;