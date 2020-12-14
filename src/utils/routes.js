const ROUTES = { 
    HOME: {name: 'Home', url: '/'},
    ABOUT: {name: 'About', url: '/about'},
    LIVE_SERMONS: {name: 'Live Sermons', url: '/sermons'},
    CALENDAR: {name: 'Calendar', url: '/calendar'},
    PRAYER_REQUESTS: {name: 'Prayer Requests', url: '/prayer'},
    CONTACT_US: {name: 'Contact', url: '/contact'},
    SIGN_IN_SIGN_UP: {name: 'Sign In', url: '/signin'},
    ADMIN_PANEL: {name: 'Admin Panel', url: '/adminpanel'},
    MEN_MINISTRY: {name: 'Guided Men\'s Ministry', url: '/mensministry'},
    MUSIC_MINISTRY: {name: 'New Wine Music Ministry', url: '/musicministry'},
    WOMEN_MINISTRY: {name: 'Leader of Esthers Circle Woman’s Group', url: '/womensministry'},
    YOUTH_MINISTRY: {name: 'Engage Youth Ministry', url: '/youthministry'},
};
export default ROUTES;
export const siteMap = [ROUTES.ABOUT, ROUTES.LIVE_SERMONS, ROUTES.CALENDAR, ROUTES.PRAYER_REQUESTS, ROUTES.CONTACT_US];