import { Button } from "@mui/material";

export const OutlinedButton = ({ children, styles, ...rest }) => {
    return (
        <Button
            {...rest}
            sx={{
                paddingTop: "10px",
                ...styles,
            }}
            variant="outlined"
        >
            {children}
        </Button>
    );
};
