import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../../screens/Common/Home";
import UserProfile from "../../screens/Common/UserProfile";

import MyLinks from "../../screens/Private/MyLinks";
import Profile from "../../screens/Private/Profile";

import Authentication from "../../screens/Public/Authentication";

import PrivateRouter from "./PrivateRouter";
import PublicRouter from "./PublicRouter";

const IndexRoutes = () => {
    return (
        <Switch>
            <PublicRouter
                exact
                path="/signin"
                flag="signIn"
                component={Authentication}
            />
            <PublicRouter
                exact
                path="/signup"
                flag="signUp"
                component={Authentication}
            />

            <PrivateRouter exact path="/profile" component={Profile} />
            <PrivateRouter path="/:username/edit" component={MyLinks} />

            <Route exact path="/" component={Home} />
            <Route path="/:username" component={UserProfile} />
        </Switch>
    );
};

export default IndexRoutes;
