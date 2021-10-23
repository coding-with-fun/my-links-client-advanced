import { Avatar, Box, Typography } from "@mui/material";
import { get } from "lodash";
import React, { useContext } from "react";
import LinksList from "../../../components/LinksList/LinksList";
import { UserContext } from "../../../context/UserContext";

const UserLinksScreen = () => {
    const { userDetails } = useContext(UserContext);

    return (
        <Box
            sx={{
                marginY: 4,
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    flexFlow: "column",
                }}
            >
                <Avatar
                    alt={get(userDetails, "name", "-")}
                    src={get(userDetails, "profileImage", "-")}
                    sx={{
                        width: 96,
                        height: 96,
                        marginBottom: 2,
                    }}
                />
                <Typography
                    sx={{
                        marginBottom: 1,
                        fontWeight: "800",
                    }}
                >
                    {get(userDetails, "name", "-")}
                </Typography>
                <Typography
                    sx={{
                        marginBottom: 2,
                        fontWeight: "600",
                    }}
                >
                    @{get(userDetails, "username", "-")}
                </Typography>
                <Typography
                    align="justify"
                    sx={{
                        marginBottom: 2,
                    }}
                >
                    {get(userDetails, "about", "-")}
                </Typography>
            </Box>

            <Typography variant="h5" component="div" mt={4} mb={2}>
                Featured Links
            </Typography>
            <LinksList type="featuredLinks" />

            <Typography variant="h5" component="div" mt={4} mb={2}>
                All links
            </Typography>
            <LinksList type="allLinks" />
        </Box>
    );
};

export default UserLinksScreen;
