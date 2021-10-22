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
import React, { Fragment } from "react";
import { BoxContainer } from "../utils/BoxContainer";
import { ContainedButton } from "../utils/ContainedButton";
import { OutlinedButton } from "../utils/OutlinedButton";

const NavbarDrawer = ({ state, setState }) => {
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
                {["Inbox", "Starred", "Send email", "Drafts"].map(
                    (text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    )
                )}
            </List>
            <Divider />
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
                    >
                        Sign Up
                    </OutlinedButton>
                </BoxContainer>
            </List>
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
