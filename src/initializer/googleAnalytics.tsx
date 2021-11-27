import ReactGA from 'react-ga4';


const TRACKING_ID = 'G-EQ8SQ1G84X';

export function initializeGA(){
    if(TRACKING_ID){
        ReactGA.initialize(TRACKING_ID);
    }
}

export const EventBehavior = (category: any, action: any, label: any) => {
    ReactGA.event({
        category,
        action,
        label,
    })
}