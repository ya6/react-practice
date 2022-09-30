import { useState } from "react";

import { Form, Input, Button, Radio,  Divider} from "antd";
const { TextArea } = Input;

const WordForm = ({closeModal}) => {
    // console.log('--->',props);
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  return (
    <>
       <h2>Save Word to Repeat</h2>

     <Divider></Divider>
      <Form   name="basic" onFinish={onFinish}>
        <Form.Item label="Diffculty" name="difficulty">
          <Radio.Group>
            <Radio value="easy"> Easy </Radio>
            <Radio value="medium"> Medium </Radio>
            <Radio value="hard"> Hard </Radio>
          </Radio.Group>
        </Form.Item>
       
     
        <Form.Item label="Coments" name="commets">
          <TextArea rows={4}/>
        </Form.Item>
        <Divider />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button htmlType="button" onClick={closeModal}>Cancel</Button>
          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </div>
      </Form>
    </>
  );
};

export default WordForm;
