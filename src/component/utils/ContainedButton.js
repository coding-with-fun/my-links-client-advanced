import { Button } from "@mui/material";

export const ContainedButton = ({ children, styles }) => {
    return (
        <Button
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
