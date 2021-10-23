import { Button } from "@mui/material";

export const ContainedButton = ({ children, styles, ...rest }) => {
    return (
        <Button
            {...rest}
            sx={{
                paddingTop: "10px",
                ...styles,
            }}
            variant="contained"
        >
            {children}
        </Button>
    );
};
