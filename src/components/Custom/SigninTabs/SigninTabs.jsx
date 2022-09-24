import { Card, Button } from "antd";
import { useState } from "react";

const SigninTabs = ({ children }) => {
  const [activIndex, setActiveIndex] = useState(0);
  return (
    <Card style={{ margin: "3rem auto", width: "500px" }}>
      <div style={{ display: "flex" }}>
        {children.map((child, idx) => {
                 return (
            <Button
              key={idx}
              block
              style={{  flex: 1 }}
              onClick={() => {
                setActiveIndex(idx);
              }}
            >
             {child.props.title}
            </Button>
          );
        })}
      </div>
      {children[activIndex]}
    </Card>
  );
};

export default SigninTabs;
