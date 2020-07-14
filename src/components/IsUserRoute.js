import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLogin, isUser } from './Accueil';

const IsUserRoute = ({component: Component, restricted, ...rest}) => {
    return (
        <Route {...rest} render={props => (
            isLogin && isUser?
                <Redirect to="/tickets" />
            : <Component {...props} />
        )} />
    );
};

export default IsUserRoute;