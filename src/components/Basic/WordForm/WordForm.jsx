import { useState } from "react";

import { Form, Input, Button, Radio, Divider } from "antd";
const { TextArea } = Input;

const WordForm = ({ closeModal, setWordData, title }) => {
  const onFinish = (values) => {
    const { difficulty = "easy", commets = "word" } = values;
    setWordData({ difficulty, commets });
  };

  return (
    <>
      <h2>{title}</h2>

      <Divider></Divider>
      <Form name="basic" onFinish={onFinish}>
        <Form.Item label="Diffculty" name="difficulty">
          <Radio.Group>
            <Radio value="easy"> Easy </Radio>
            <Radio value="medium"> Medium </Radio>
            <Radio value="hard"> Hard </Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item label="Comment" name="commet">
          <TextArea rows={4} />
        </Form.Item>
        <Divider />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button htmlType="button" onClick={closeModal}>
            Cancel
          </Button>
          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </div>
      </Form>
    </>
  );
};

export default WordForm;
