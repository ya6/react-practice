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
    },
    breakpoints: {
        values: {
          xs: 0,
          sm: 600,
          md: 900,
          lg: 1260,
          xl: 1536,
        },
      },
      palette: {
        gray:  {
            light: "#ccc",
            main: "#9e9e9e",
            dark: "#565656"
           
          }
      },
})