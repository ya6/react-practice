import { Card, Button } from "antd";
import TabsContext from "../../../helpers/TabsContect";
import { useContext, Children } from "react";

const SigninTabs = ({ children }) => {
  const {activeIndex, setActiveIndex} = useContext(TabsContext)
  
  return (
    <Card style={{ margin: "3rem auto", width: "500px" }}>
      <div style={{ display: "flex" }}>
        {Children.toArray(children).map((child, idx) => {
          return (
            <Button
              style={idx === activeIndex ? { flex: 1.5 } : { flex: 1 }}
              key={idx}
              block
              onClick={() => {
                setActiveIndex(idx);
              }}
            >
              {child.props.title}
            </Button>
          );
        })}
      </div>
      {Children.toArray(children)[activeIndex]}
    </Card>
  );
};

export default SigninTabs;
