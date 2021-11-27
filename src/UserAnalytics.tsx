import {useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import ReactGA from 'react-ga4';

function UserAnalytics(){
    const { pathname } = useLocation();

    useEffect(()=>{
        ReactGA.send({ hitType: 'pageview', page: pathname })
    }, [pathname]);

    return null;
}

export default UserAnalytics;