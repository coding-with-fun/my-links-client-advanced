import { Box } from "@mui/material";

export const BoxContainer = ({ children, styles, ...rest }) => {
    return (
        <Box
            {...rest}
            sx={{
                ...styles,
            }}
        >
            {children}
        </Box>
    );
};
