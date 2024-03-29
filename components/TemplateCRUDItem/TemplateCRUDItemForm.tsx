import React from 'react'
import type { NextPage } from 'next'
import {
  Form,
  Input,
  Button,
  Modal,
} from 'antd'
import { ExclamationCircleOutlined } from '@ant-design/icons'

import { TemplateCRUDItemProps } from './TemplateCRUDItemTypes'

export type TemplateCRUDItemFormProps = Partial<TemplateCRUDItemProps> & { onSave: (values: Partial<TemplateCRUDItemProps>) => void, onDelete?: (id: string) => void }

const TemplateCRUDItemForm: NextPage<TemplateCRUDItemFormProps> = ({ _id, title, text, created_at, updated_at, onSave, onDelete }) => {
  const onFinish = (values: any) => {
    console.log('Success:', values)
    if (_id) {
      values._id = _id
    }
    onSave(values)
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }


  const confirm = () => {
    Modal.confirm({
      title: 'Confirm',
      icon: <ExclamationCircleOutlined />,
      content: `Do you want to delete ${title}?`,
      okText: 'Delete',
      onOk: () => {
        onDelete && _id && onDelete(_id.toString())
      },
      cancelText: 'Cancel',
    });
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      fields={[
        {
          name: ['title'],
          value: title,
        },
        {
          name: ['text'],
          value: text,
        },
      ]}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Title"
        name="title"
        rules={[{ required: true, message: 'Please input title!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Text"
        name="text"
        rules={[{ required: true, message: 'Please input text!' }]}
      >
        <Input.TextArea />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Button type="primary" danger ghost onClick={confirm}>
          Delete
        </Button>
      </Form.Item>
    </Form>

  )
}

export { TemplateCRUDItemForm }
