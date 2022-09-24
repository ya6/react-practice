import { Card, Button } from "antd";
import { useState } from "react";

const SigninTabs = ({ children }) => {
  const [activIndex, setActiveIndex] = useState(0);
  return (
    <Card style={{ margin: "3rem auto", width: "500px" }}>
      <div style={{ display: "flex" }}>
        <Button
          block
          style={{ padding: "0 1rem", flex: 1 }}
          onClick={() => {
            setActiveIndex(0);
          }}
        >
          Login
        </Button>
        <Button
          block
          style={{ padding: "0 1rem", flex: 1 }}
          onClick={() => {
            setActiveIndex(1);
          }}
        >
          Register{" "}
        </Button>
      </div>
      {children[activIndex]}
    </Card>
  );
};

export default SigninTabs;
