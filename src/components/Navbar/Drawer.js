import {
    Mail as MailIcon,
    MoveToInbox as InboxIcon,
} from "@mui/icons-material";
import {
    Divider,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    SwipeableDrawer,
} from "@mui/material";
import React, { Fragment, useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthenticationContext } from "../../context/AuthenticationContext";
import { BoxContainer } from "../utils/BoxContainer";
import { ContainedButton } from "../utils/ContainedButton";
import { OutlinedButton } from "../utils/OutlinedButton";
import { get } from "lodash";

const NavbarDrawer = ({ state, setState }) => {
    const { isUserAuthenticated, handleSignIn, handleSignOut } = useContext(
        AuthenticationContext
    );

    const history = useHistory();

    const CommonRoutes = [
        {
            title: "Home",
            key: "home",
            path: "/",
        },
    ];

    const PrivateRoutes = [
        {
            title: "My Profile",
            key: "profile",
            path: "/profile",
        },
    ];

    const PublicRoutes = [];

    const toggleDrawer = (flag) => (event) => {
        if (
            event &&
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }

        setState(flag);
    };

    const list = (
        <BoxContainer
            styles={{
                width: 250,
            }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                {[
                    ...CommonRoutes.concat(
                        isUserAuthenticated ? PrivateRoutes : PublicRoutes
                    ),
                ].map((route, index) => (
                    <ListItem
                        button
                        key={route.key}
                        onClick={() => history.push(get(route, "path", "/"))}
                    >
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={get(route, "title", "-")} />
                    </ListItem>
                ))}
            </List>

            <Divider />

            {isUserAuthenticated ? (
                <List>
                    <BoxContainer
                        styles={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            marginY: "1rem",
                        }}
                    >
                        <ContainedButton
                            styles={{
                                minWidth: "8rem",
                            }}
                            onClick={() => handleSignOut()}
                        >
                            Sign Out
                        </ContainedButton>
                    </BoxContainer>
                </List>
            ) : (
                <List>
                    <BoxContainer
                        styles={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            marginY: "1rem",
                        }}
                    >
                        <ContainedButton
                            styles={{
                                minWidth: "8rem",
                            }}
                            onClick={() => handleSignIn()}
                        >
                            Sign In
                        </ContainedButton>
                    </BoxContainer>

                    <BoxContainer
                        styles={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            marginY: "1rem",
                        }}
                    >
                        <OutlinedButton
                            styles={{
                                minWidth: "8rem",
                            }}
                            onClick={() => handleSignIn()}
                        >
                            Sign Up
                        </OutlinedButton>
                    </BoxContainer>
                </List>
            )}
        </BoxContainer>
    );

    return (
        <div>
            <Fragment>
                <SwipeableDrawer
                    anchor={"left"}
                    open={state}
                    onClose={toggleDrawer(false)}
                    onOpen={toggleDrawer(true)}
                >
                    {list}
                </SwipeableDrawer>
            </Fragment>
        </div>
    );
};

export default NavbarDrawer;
