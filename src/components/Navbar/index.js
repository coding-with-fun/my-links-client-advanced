import {
    DarkMode as DarkModeIcon,
    LightMode as LightModeIcon,
    Menu as MenuIcon,
} from "@mui/icons-material";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import React, { Fragment, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";
import { BoxContainer } from "../utils/BoxContainer";
import NavbarDrawer from "./Drawer";

export default function PrimarySearchAppBar() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const [state, setState] = useState(false);

    return (
        <Fragment>
            <NavbarDrawer state={state} setState={setState} />
            <BoxContainer
                styles={{
                    flexGrow: 1,
                    pb: 8,
                }}
            >
                <AppBar position="fixed">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            sx={{
                                mr: 2,
                            }}
                            onClick={() => setState(true)}
                        >
                            <MenuIcon />
                        </IconButton>

                        <Link
                            to="/asa"
                            style={{
                                color: "inherit",
                                textDecoration: "none",
                            }}
                        >
                            <Typography
                                variant="h6"
                                noWrap
                                paddingTop={0.8}
                                component="div"
                            >
                                MUI
                            </Typography>
                        </Link>

                        <BoxContainer
                            styles={{
                                flexGrow: 1,
                            }}
                        />

                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            onClick={toggleTheme}
                        >
                            {theme === "dark" ? (
                                <LightModeIcon />
                            ) : theme === "light" ? (
                                <DarkModeIcon />
                            ) : null}
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </BoxContainer>
        </Fragment>
    );
}
