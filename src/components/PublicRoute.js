import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLogin } from './Accueil';

const PublicRoute = ({component: Component, restricted, ...rest}) => {
    return (
        <Route {...rest} render={props => (
            isLogin?
                <Redirect to="/tickets" />
            : <Component {...props} />
        )} />
    );
};

export default PublicRoute;