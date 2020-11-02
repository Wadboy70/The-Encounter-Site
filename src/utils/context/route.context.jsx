import React, {createContext} from 'react';
import * as ROUTES from '../../utils/routes';

const siteMap = [ROUTES.ABOUT, ROUTES.LIVE_SERMONS, ROUTES.CALENDAR, ROUTES.PRAYER_REQUESTS, ROUTES.CONTACT_US];

export const SiteMapContext = createContext(siteMap);

export const SiteMapProvider = ({children}) => {
    return(
        <SiteMapContext.Provider value = {siteMap}>
            {children}
        </SiteMapContext.Provider>
    );
};