import { Button, Stack, Paper } from "@mui/material";
import TabsContext from "../../../helpers/TabsContect";
import { useContext, Children } from "react";

const SigninTabs = ({ children }) => {
  const { activeIndex, setActiveIndex } = useContext(TabsContext);

  return (
    <Paper style={{ margin: "3rem auto", padding: "2rem", width: "500px" }}>
      <Stack direction="row" style={{ display: "flex" }}>
        {Children.toArray(children).map((child, idx) => {
          return (
            <Button
              variant="outlined"
              style={{
                flex: `${idx === activeIndex ? 2 : 1}`,
                color: `${idx === activeIndex ? "#3d5afe" : "gray"}`,
                borderRadius: "0",
                fontWeight: 400,
                border: "1px solid lightgray",
              }}
              key={idx}
              onClick={() => {
                setActiveIndex(idx);
              }}
            >
              {child.props.title}
            </Button>
          );
        })}
      </Stack>
      {Children.toArray(children)[activeIndex]}
    </Paper>
  );
};

export default SigninTabs;
