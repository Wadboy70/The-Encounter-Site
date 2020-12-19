import React from 'react'

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
    YOUTH_MINISTRY: {name: 'Engage Youth Ministry', url: '/youthministry'},
    MEN_MINISTRY: {name: 'Guided Men\'s Ministry', url: '/mensministry'},
    MUSIC_MINISTRY: {name: 'New Wine Music Ministry', url: '/musicministry'},
    WOMEN_MINISTRY: {name: 'Leader of Esther’s Circle Woman’s Group', url: '/womensministry'},
};
export const FORM_SUBMIT_TYPE = {
    EMAIL: 'EMAIL',
    ADMIN_STORAGE: 'ADMIN_STORAGE'
};

export const FORM_FIELD_INPUT_TYPE = {
    TEXT_INPUT: 'TEXT_INPUT',
    TEXT_AREA: 'TEXT_AREA' 
};

export const LINK_BUTTON_TYPES = {
    INTERNAL: 'link',
    EXTERNAL: 'anchor' 
};
export const DUPLICATE_PAGES = [
    {
        jumboImage: imageUrls.churchService,
        title: ROUTES.MEN_MINISTRY.name,
        url: ROUTES.MEN_MINISTRY.url,
        description: 'Sign up for this ministry using the form below',
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
        jumboImage: imageUrls.tithing,
        title: 'ways to give',
        url: ROUTES.GIVING.url,
        description: 'Your generosity is positively changing lives in this ministry, community, and globally. The Apostle Paul reminds us in 2 Corinthians 9:6-8 that whoever sows sparingly will reap sparingly and whosoever sows generously will reap generously. As you generously sow into this work, it is Gods covenant promise to multiply back to you what has been given. We want you to know that your seed creates resources for us to carry Gods love to the nations',
        link: {
            type: LINK_BUTTON_TYPES.EXTERNAL,
            to: 'https://www.givelify.com/givenow/1.0/NzExOTk=/selection',
            buttonContent: 'Make a Gift Today'
        }
    },
    {
        jumboImage: imageUrls.womensMinistry,
        title: ROUTES.WOMEN_MINISTRY.name,
        url: ROUTES.WOMEN_MINISTRY.url,
        description: 'Sign up for this ministry using the form below',
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
        description: <>{'The Encounter Worship Center\'s Youth Ministry "Engage" has been designed to help all youth from elementary, middle, and high school age groups to engage God the father not just on Sundays but in their everyday lives and young believers.  Through our teaching outlets, and fellowship opportunities it is our expectation that our youth will grow in their faith, their character, and their relationships.'} <br/><br/>{
            <span>Sign up for this ministry using the form below</span>}</>,
        form:{
            submit: {
                type: FORM_SUBMIT_TYPE.ADMIN_STORAGE,
                collection: COLLECTIONS.YOUTH_MINISTRY
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
        jumboImage: imageUrls.concert,
        title: ROUTES.MUSIC_MINISTRY.name,
        url: ROUTES.MUSIC_MINISTRY.url,
        description: 'Sign up for this ministry using the form below',
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
                }
            ],
        }
    },
    {
        jumboImage: imageUrls.contact,
        title: ROUTES.CONTACT_US.name,
        url: ROUTES.CONTACT_US.url,
        description: 'Contact the leaders of our ministry using the form below',
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
        jumboImage: imageUrls.friends,
        title: ROUTES.PRAYER_REQUESTS.name,
        url: ROUTES.PRAYER_REQUESTS.url,
        description: 'Submit prayer requests to the leaders of our ministry using the form below',
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

