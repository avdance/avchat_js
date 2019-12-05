import React, { Component } from 'react';
import { Modal, Button } from 'antd';

export default class LoginComponent extends Component {
  state = {
    loading: false,
    visible: true,
  };

  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  render() {
    const { visible, loading } = this.state;
    return (
      <div>
        <Modal
          visible={visible}
          title="登录"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" onClick={this.handleCancel}>
              Return
            </Button>,
            <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
              Submit
            </Button>,
          ]}
        >
            <div style={{backgroundColor: 'yellow'}}>
                <p>手机号：<input type="input" id="mobile" /></p>
                <p>手机号：<input type="input" id="mobile" /></p>
            </div>
        </Modal>
      </div>
    );
  }
}
