import { Button } from "@mui/material";

export const OutlinedButton = ({ children, styles }) => {
    return (
        <Button
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
