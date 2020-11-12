import React from 'react';

import DisplayItem from '../../components/DisplayItem/DisplayItem';
import HighlightSection from '../HighlightSection/HighlightSection';
import arthur from '../../assets/images/arthurHeadshot.jpg';

import './AboutPastorSection.scss';

const AboutPastorSection = () => {

    return(
        <HighlightSection
            backgroundPhoto = {arthur}
        >
            <DisplayItem 
                info = {{        
                    title: 'Pastor Arthur Hinton',
                    content: 'Arcu non sodales neque sodales ut etiam sit amet. Libero justo laoreet sit amet. Aliquet enim tortor at auctor urna nunc id. Sollicitudin aliquam ultrices sagittis orci. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit.\nNeque vitae tempus quam pellentesque nec nam aliquam sem. Est ultricies integer quis auctor. Proin sagittis nisl rhoncus mattis rhoncus urna neque.'
                }}
            />
        </HighlightSection>        
    );
};

export default AboutPastorSection;