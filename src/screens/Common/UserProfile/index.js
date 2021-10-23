import { Avatar, Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import EditableList from "../../../components/LinksList/EditableList";
import { UserContext } from "../../../context/UserContext";
import { get } from "lodash";

const UserLinksScreen = () => {
    const { userDetails } = useContext(UserContext);

    return (
        <Box>
            <Box>
                <Avatar
                    alt={get(userDetails, "name", "-")}
                    src={get(userDetails, "profileImage", "-")}
                    sx={{ width: 96, height: 96 }}
                />
                <Typography>{get(userDetails, "name", "-")}</Typography>
                <Typography>@{get(userDetails, "username", "-")}</Typography>
                <Typography>{get(userDetails, "about", "-")}</Typography>
            </Box>

            <Typography variant="h5" component="div" mt={4} mb={2}>
                Featured Links
            </Typography>
            <EditableList type="featuredLinks" />

            <Typography variant="h5" component="div" mt={4} mb={2}>
                All links
            </Typography>
            <EditableList type="allLinks" />
        </Box>
    );
};

export default UserLinksScreen;
