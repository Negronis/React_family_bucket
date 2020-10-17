import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useHistory,
    useLocation,
    Redirect
} from 'react-router-dom';
import routerArray from './pages';
let RouterGuard = () => {
    let location = useLocation();
    let { pathname } = location; 
    let thisRoute = routerArray.find(e => e['path'] === pathname); 
    let isLogin = localStorage.getItem("isLogin");
    if (pathname === '/login' && !isLogin) {
        return <Route path={pathname} component={thisRoute['component']}></Route>
    }
    if (isLogin) {
        if (pathname === '/login') {
            return <Redirect to="/" />
        }
        if (thisRoute) {
            return <Route path={pathname} component={thisRoute['component']} />
        } else {
            return <Redirect path="/error" />
        }
    } else {
        return <Redirect to="/login" />
    }
}
let Routes = () => { 
    return (
        <Router>
            <Switch>
                <RouterGuard />
            </Switch>
        </Router>
    )
}

export default Routes;