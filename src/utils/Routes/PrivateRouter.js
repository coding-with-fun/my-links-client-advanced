import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthenticationContext } from "../../context/AuthenticationContext";

const PrivateRouter = ({ component: Component, ...rest }) => {
    const { isUserAuthenticated } = useContext(AuthenticationContext);

    return (
        <Route
            {...rest}
            render={(props) => {
                if (isUserAuthenticated) {
                    return <Component />;
                } else {
                    return (
                        <Redirect
                            to={{
                                pathname: "/signin",
                                state: {
                                    from: props.location,
                                },
                            }}
                        />
                    );
                }
            }}
        />
    );
};

export default PrivateRouter;
