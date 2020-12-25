import validEmails from "./constants/validEmails";
import { COLLECTIONS } from "./firebase";
import imageUrls from "../assets/imageUrls";

const ROUTES = { 
    HOME: {name: 'Home', url: '/'},
    ABOUT: {name: 'About', url: '/about'},
    LIVE_SERMONS: {name: 'Live Sermons', url: '/sermons'},
    CALENDAR: {name: 'Calendar', url: '/calendar'},
    PRAYER_REQUESTS: {name: 'Prayer Requests', url: '/prayer'},
    CONTACT_US: {name: 'Contact', url: '/contact'},
    SIGN_IN_SIGN_UP: {name: 'Sign In', url: '/signin'},
    FORGOT_PASSWORD: {name: 'Forgot Password', url: '/forgot'},
    ADMIN_PANEL: {name: 'Admin Panel', url: '/adminpanel'},
    GIVING: {name: 'Giving', url: '/giving'},
    LEADERSHIP: {name: 'Leadership', url: '/leadership'},
    MEN_MINISTRY: {name: "\"Guided\" Men's Ministry", url: '/mensministry'},
    WOMEN_MINISTRY: {name: 'Esther’s Circle Women’s Group', url: '/womensministry'},
    YOUTH_MINISTRY: {name: '"Engage" Youth Ministry', url: '/youthministry'},
    MUSIC_MINISTRY: {name: 'New Wine Music Ministry', url: '/musicministry'},
};
export const FORM_SUBMIT_TYPE = {
    EMAIL: 'EMAIL',
    ADMIN_STORAGE: 'ADMIN_STORAGE'
};

export const FORM_FIELD_INPUT_TYPE = {
    TEXT_INPUT: 'TEXT_INPUT',
    TEXT_AREA: 'TEXT_AREA',
    DROPDOWN: 'DROPDOWN'
};

export const LINK_BUTTON_TYPES = {
    INTERNAL: 'link',
    EXTERNAL: 'anchor' 
};
export const DUPLICATE_PAGES = [
    {
        jumboImage: imageUrls.mensMinistry,
        title: ROUTES.MEN_MINISTRY.name,
        url: ROUTES.MEN_MINISTRY.url,
        description: ['At The Encounter Worship Center, we biblically train and equip men to be spiritual leaders in their homes, in the church, and in their places of business. "Guided" Men’s Ministry guides men on their individual life journeys, that as a Christ follower that can effectively impact their generations. We accomplish this mission through Bible study, discipleship groups, evangelism training, leadership development, accountability groups, mentoring, retreats, mission trips, and special events. In today’s culture, it’s increasingly important for men to honor God with their hearts and lives.', 'Sign up for this ministry using the form below'],
        form:{
            submit: {
                type: FORM_SUBMIT_TYPE.ADMIN_STORAGE,
                collection: COLLECTIONS.MENS_MINISTRY
            },
            fields: [
                {
                    name: 'name',
                    label: 'Name',
                    type: FORM_FIELD_INPUT_TYPE.TEXT_INPUT
                },
                {
                    name: 'email',
                    label: 'Email',
                    type: FORM_FIELD_INPUT_TYPE.TEXT_INPUT
                }
            ],
        }

    },
    {
        jumboImage: imageUrls.womensMinistry,
        title: ROUTES.WOMEN_MINISTRY.name,
        url: ROUTES.WOMEN_MINISTRY.url,
        description: ['Queen Esther was a woman whose body, mind, soul and actions affected reality and changed the world. This is what we believe that every woman has the potential to be as they encounter a life with the Lord. At The Encounter Worship Center, we have established the Esther\'s Circle Women\'s Group to help all women grow in their faith and grow in their overall perception of who God has created them to be in the Earth. We accomplish this mission through Bible study, discipleship groups, evangelism training, leadership development, accountability groups, mentoring, retreats, mission trips, and special events. In today\'s culture, it\'s vital for women to honor God with their hearts and lives.','Sign up for this ministry using the form below'],
        form:{
            submit: {
                type: FORM_SUBMIT_TYPE.ADMIN_STORAGE,
                collection: COLLECTIONS.WOMENS_MINISTRY
            },
            fields: [
                {
                    name: 'name',
                    label: 'Name',
                    type: FORM_FIELD_INPUT_TYPE.TEXT_INPUT
                },
                {
                    name: 'email',
                    label: 'Email',
                    type: FORM_FIELD_INPUT_TYPE.TEXT_INPUT
                }
            ],
        }
    },
    {
        jumboImage: imageUrls.youth,
        title: ROUTES.YOUTH_MINISTRY.name,
        url: ROUTES.YOUTH_MINISTRY.url,
        description: ['The Encounter Worship Center\'s Youth Ministry "Engage", has been designed to help all youth from elementary, middle, and high school age groups to engage God the Father, not just on Sundays, but in their everyday lives. Through our teaching outlets, and fellowship opportunities, it is our expectation that our youth will grow in their faith, their character, and their relationships.','Sign up for this ministry using the form below'],
        form:{
            submit: {
                type: FORM_SUBMIT_TYPE.ADMIN_STORAGE,
                collection: COLLECTIONS.YOUTH_MINISTRY,
                partition: 'group'
            },
            fields: [
                {
                    name: 'name',
                    label: 'Name',
                    type: FORM_FIELD_INPUT_TYPE.TEXT_INPUT
                },
                {
                    name: 'email',
                    label: 'Email',
                    type: FORM_FIELD_INPUT_TYPE.TEXT_INPUT
                },
                {
                    name: 'group',
                    label: 'Select Age Group',
                    type: FORM_FIELD_INPUT_TYPE.DROPDOWN,
                    values: ['E-Group 1: Elementary School','E-Group 2: Middle School', 'E-Group 3: High School'],
                    defaultVal: 'E-Group 1: Elementary School'
                }
            ],
        }
    },
    {
        jumboImage: imageUrls.concert,
        title: ROUTES.MUSIC_MINISTRY.name,
        url: ROUTES.MUSIC_MINISTRY.url,
        description: ['Music has always played an important role in the worship of God\'s people.  The purpose of the "New Wine" Music Ministry, is to share the gospel of Jesus Christ through song, encourage believers in their walk with Christ, lead the congregation in worship, provide an avenue through which individuals may share their gift, and be integral part of the worship experience. This ministry also enables its members to grow spiritually by committing their time and talents to God, while providing a relevant sound for assigned worship services as well as special services outside of the church.  This ability creates an atmosphere that the power and the presence of God may be experienced.','Sign up for this ministry using the form below'],   
        form:{
            submit: {
                type: FORM_SUBMIT_TYPE.ADMIN_STORAGE,
                collection: COLLECTIONS.MUSIC_MINISTRY
            },
            fields: [
                {
                    name: 'name',
                    label: 'Name',
                    type: FORM_FIELD_INPUT_TYPE.TEXT_INPUT
                },
                {
                    name: 'email',
                    label: 'Email',
                    type: FORM_FIELD_INPUT_TYPE.TEXT_INPUT
                },
                {
                    name: 'gift',
                    label: 'Ministry Gift (Vocal, Piano, Guitar, etc.)',
                    noFormat: true,
                    type: FORM_FIELD_INPUT_TYPE.TEXT_INPUT
                }
            ],
        }
    },
    {
        jumboImage: imageUrls.contact,
        title: ROUTES.CONTACT_US.name,
        url: ROUTES.CONTACT_US.url,
        description: ['Contact the leaders of our ministry using the form below'],
        form:{
            submit: {
                type: FORM_SUBMIT_TYPE.EMAIL,
                to: validEmails.DEFAULT_EMAIL
            },
            fields: [
                {
                    name: 'name',
                    label: 'Name',
                    type: FORM_FIELD_INPUT_TYPE.TEXT_INPUT
                },
                {
                    name: 'email',
                    label: 'Email',
                    type: FORM_FIELD_INPUT_TYPE.TEXT_INPUT
                },
                {
                    name: 'message',
                    label: 'Message',
                    type: FORM_FIELD_INPUT_TYPE.TEXT_AREA
                }
            ],
        }
    },
    {
        jumboImage: imageUrls.prayerRequests,
        title: ROUTES.PRAYER_REQUESTS.name,
        url: ROUTES.PRAYER_REQUESTS.url,
        description: ['','Submit prayer requests to the leaders of our ministry using the form below','All prayer request will be kept confidential to the prayer team and leadership'],
        form:{
            submit: {
                type: FORM_SUBMIT_TYPE.EMAIL,
                to: validEmails.PRAYER_REQUEST_EMAIL
            },
            fields: [
                {
                    name: 'name',
                    label: 'Name',
                    type: FORM_FIELD_INPUT_TYPE.TEXT_INPUT
                },
                {
                    name: 'email',
                    label: 'Email',
                    type: FORM_FIELD_INPUT_TYPE.TEXT_INPUT
                },
                {
                    name: 'message',
                    label: 'Message',
                    type: FORM_FIELD_INPUT_TYPE.TEXT_AREA
                }
            ],
        }
    }
];
export default ROUTES;
export const siteMap = [ROUTES.ABOUT, ROUTES.LIVE_SERMONS, ROUTES.CALENDAR, ROUTES.PRAYER_REQUESTS, ROUTES.CONTACT_US];

