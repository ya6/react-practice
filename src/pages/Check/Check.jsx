import { useState } from "react";
import Container from "../../components/Basic/Container/Container";
import { useAppState } from "../../state/app-state";
import { Button, Checkbox, Form, Input } from "antd";

const Check = () => {
  const [rigthWords, setRightWords] = useState([]);
  const [wrongWords, setWrongWords] = useState([]);
  const [lerned, setLerned] = useState(0);
  const [{ pageOfWords, isAuth }, dispatch] = useAppState();
  const [form] = Form.useForm();

  const onFinish = (values) => {
    const candidate = values.word.toLowerCase();
    const idx = pageOfWords.findIndex((el) => el.word.toLowerCase() === candidate);
    if (idx == -1) {
        setWrongWords([...wrongWords, candidate]);
    } else  if(!rigthWords.includes(candidate)) {
        setLerned(lerned + 1); 
        setRightWords([...rigthWords, candidate]);
    }
    form.resetFields();
  };
  return (
    <Container>
      <div style={{ padding: "1rem" }}>
        <h2>Check</h2>
        {isAuth ? (
          <>
            <div style={{ display: "flex", background: "white", padding: "1rem" }}>
                <div style={{flex:1,  padding: " 0 1rem"}}>
                <h3>{`wrong list:`}</h3>
                {wrongWords.map((w,idx)=>(<p key={idx}>{w}</p>))}
                </div>
              <div style={{ flex: 3 }}>
                <Form
               form={form}
               autoFocus={true}
                  name="basic"
                  labelCol={{ span: 8 }}
                  wrapperCol={{ span: 16 }}
                  initialValues={{ remember: true }}
                  onFinish={onFinish}
                  autoComplete="off"
                >
                  <Form.Item label="Word" name="word" rules={[{ required: true, message: "Please input english word!" }]}>
                    <Input />
                  </Form.Item>

                  <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button block type="primary" htmlType="submit">
                      Submit
                    </Button>
                  </Form.Item>
                </Form>
              </div>
              <div style={{ flex: 2, padding: " 0 1rem", textAlign: "right" }}>
                <h2>{`Total: ${pageOfWords.length}`}</h2>
                <h3>{`Lerned: ${lerned}`}</h3>
                <h3>{`right list:`}</h3>
                {rigthWords.map((w,idx)=>(<p key={idx}>{`${idx+1}. ${w}`}</p>))}
              </div>
            </div>
          </>
        ) : (
          <p>You have to login</p>
        )}
      </div>
    </Container>
  );
};

export default Check;
