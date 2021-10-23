import { Box, Paper, Typography } from "@mui/material";
import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const LinksList = ({ type }) => {
    const { userLinks } = useContext(UserContext);

    return (
        <Box className="list_container">
            {userLinks[type].map(({ _id, url, title }, index) => {
                return (
                    <Paper
                        variant="outlined"
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            my: 2,
                        }}
                        className="list_item"
                    >
                        <Box
                            sx={{
                                flex: 1,
                                p: 2,
                                cursor: "pointer",
                            }}
                        >
                            <Typography>{title}</Typography>
                        </Box>
                    </Paper>
                );
            })}
        </Box>
    );
};

export default LinksList;
