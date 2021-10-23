import { Button } from "@mui/material";

export const OutlinedButton = ({ children, styles, ...rest }) => {
    return (
        <Button
            {...rest}
            sx={{
                ...styles,
            }}
            variant="outlined"
        >
            {children}
        </Button>
    );
};
