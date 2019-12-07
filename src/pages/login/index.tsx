import React, { Component } from 'react';
import { RouteComponentProps } from "react-router-dom";
import { Modal, Button } from 'antd';

interface IProps {}
type HomeProps = IProps & RouteComponentProps;

interface IState {}

export default class LoginComponent extends React.Component<HomeProps, IState> {
  //mixins = [ History ];
  constructor(props: HomeProps) {
    super(props);
  }

  state = {
    loading: false,
    visible: true,
  };

  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
      this.props.history.push('/home');
    }, 3000);
  };

  handleCancel = () => {
    this.setState({ visible: false });
    this.props.history.push('/home');
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
            <div style={{margin: '0 auto', width: '210px'}}>
                <p>手机号：<input type="input" id="mobile" /></p>
                <p>验证码：<input type="input" id="mobile" /></p>
            </div>
        </Modal>
      </div>
    );
  }
}
