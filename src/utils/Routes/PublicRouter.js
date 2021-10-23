import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthenticationContext } from "../../context/AuthenticationContext";

const PublicRouter = ({ component: Component, ...rest }) => {
    const { isUserAuthenticated } = useContext(AuthenticationContext);

    return (
        <Route
            {...rest}
            render={() => {
                if (isUserAuthenticated) {
                    return (
                        <Redirect
                            to={{
                                pathname: "/profile",
                            }}
                        />
                    );
                } else {
                    return <Component />;
                }
            }}
        />
    );
};

export default PublicRouter;
