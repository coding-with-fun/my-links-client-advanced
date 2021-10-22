import { Box } from "@mui/material";

export const BoxContainer = ({ children, styles, props }) => {
    return (
        <Box
            sx={{
                ...styles,
            }}
            {...props}
        >
            {children}
        </Box>
    );
};
