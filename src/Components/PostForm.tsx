import React from 'react';
import { Form, Input, Button, message  } from 'antd';
import { useGlobalContext } from '../Context';

interface FormData {
  name: string;
  description: string;
  url: string;
}

const CustomForm: React.FC = () => {
    const {createUserPost} = useGlobalContext();
    const [form] = Form.useForm();
  const onFinish = (values: FormData) => {
    console.log(values);
    createUserPost(values);
    form.resetFields();
    message.success("posted successfullly");
  };

  return (
    <Form<FormData>
    form={form}
      name="customForm"
      onFinish={onFinish}
      initialValues={{ name: '', description: '', url: '' }}
      layout="vertical"
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: 'Please enter a name' }]}
      >
        <Input placeholder="Enter name" />
      </Form.Item>

      <Form.Item
        label="Image URL"
        name="url"
        rules={[
          { required: true, message: 'Please enter a URL' },
          { type: 'url', message: 'Please enter a valid URL' },
        ]}
      >
        <Input placeholder="Enter URL" />
      </Form.Item>

      <Form.Item
        label="Description"
        name="description"
        rules={[{ required: true, message: 'Please enter a description' }]}
      >
        <Input.TextArea rows={4} placeholder="Enter description" />
      </Form.Item>

      

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CustomForm;
