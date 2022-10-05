import { createTheme } from "@mui/material";
export const theme = createTheme({
    components: {
        MuiTypography: {
            variants: [{
                props: {
                    variant: "body2"
                },
                style: {
                    fontSise: 11
                }
            }]
        }
    }
})