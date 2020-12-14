import tarneice from '../../assets/images/tarneiceMines.png';
import anthony from '../../assets/images/anthonyAlexander.png';
import brittany from '../../assets/images/BrittanyWeaver.png';
import lavon from '../../assets/images/LavonThompson.png';
import julianna from '../../assets/images/JuliannaJamesGilbert.png';
import ROUTES from '../routes';

const LEADERSHIP_TEAM = [
    {
        name: 'Tarneice Mines',
        url: tarneice,
        description: 'Church Administrator',
        link: ROUTES.HOME.url
    },
    {
        name: 'Minister Anthony Alexander',
        url: anthony,
        description: 'Leader of Guided Men’s Ministry',
        link: ROUTES.MEN_MINISTRY.url
    },
    {
        name: 'Minister Brittany C. Weaver',
        url: brittany,
        description: 'Leader of New Wine Music Ministry',
        link: ROUTES.MUSIC_MINISTRY.url
    },
    {
        name: 'Minister Lavon Thompson',
        url: lavon,
        description: 'Leader of Esthers Circle Woman’s Group',
        link: ROUTES.WOMEN_MINISTRY.url
    },
    {
        name: 'Minister Julianna James-Gilbert',
        url: julianna,
        description: 'Leader of the Engage Youth Ministry',
        link: ROUTES.YOUTH_MINISTRY.url
    }

];

export default LEADERSHIP_TEAM;