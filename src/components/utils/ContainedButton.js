import { Button } from "@mui/material";

export const ContainedButton = ({ children, styles, ...rest }) => {
    return (
        <Button
            {...rest}
            sx={{
                ...styles,
            }}
            variant="contained"
        >
            {children}
        </Button>
    );
};
