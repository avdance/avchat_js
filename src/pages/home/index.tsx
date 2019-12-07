import React, { Component } from 'react';
import { Layout, Row, Col, Avatar, Tabs, Collapse, List, Descriptions, Input, Button, } from 'antd';
import '../../css/style.css';
const { Header, Content, Sider } = Layout;
const { TabPane } = Tabs;
const { Panel } = Collapse;

export default class ChatRoomComponent extends Component {
    public userListData = [
        {
            title: 'zhangsan',
        },
        {
            title: 'lisi',
        },
        {
            title: '王五',
        },
        {
            title: '马六',
        },
    ]


    renderUserlist() {
        return (
            <List itemLayout="horizontal"
                bordered={false}
                dataSource={this.userListData}
                renderItem={(item) => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                            title={<a href="#">{item.title}</a>}
                        />
                    </List.Item>
                )}
            >

            </List>
        );
    }

    render() {
        return (
            <Layout>
                <Header style={{ height: "64px", background: '#fff', boxShadow: '0 2px 8px #f0f1f2' }}>
                    <Row type="flex" style={{ height: '64px', alignItems: 'center', justifyContent: 'center' }}>
                        <Col span={12}>
                            <div className="logo"></div>
                        </Col>
                        <Col span={12} style={{ display: "flex", flexDirection: 'row-reverse', alignItems: 'center', lineHeight: "64px" }}>
                            <span style={{ marginLeft: '6px' }}>zhangfeng</span><Avatar>Z</Avatar>
                        </Col>
                    </Row>
                </Header>

                <Content style={{ position: 'absolute', top: '66px', bottom: '0px' }}>
                    <Row type="flex" style={{ minHeight: '500px' }}>
                        <Col span={6} style={{ padding: '0 2px', borderRight: '2px solid #f0f2f5', position: 'relative' }}>
                            <div style={{ position: 'absolute', bottom: '0', left: '0', right: '1px', top: '0', overflowY: 'scroll' }}>
                                <Tabs defaultActiveKey="1">
                                    <TabPane tab="好友" key="1">
                                        <Collapse defaultActiveKey="1" bordered={false}>
                                            <Panel header="开发部" key="1">
                                                {this.renderUserlist()}
                                            </Panel>
                                            <Panel header="销售部" key="2">
                                                {this.renderUserlist()}
                                            </Panel>
                                            <Panel header="运维部" key="3">
                                                {this.renderUserlist()}
                                            </Panel>
                                        </Collapse>
                                    </TabPane>
                                    <TabPane tab="房间" key="2">
                                        {this.renderUserlist()}
                                    </TabPane>
                                </Tabs>
                            </div>
                        </Col>
                        <Col span={10} style={{ padding: '0 16px', position: "relative" }}>
                            <div className="chat-room" >
                                <div className="chat-content" style={{ overflowY: 'hidden',position:'absolute',left:'6px',right:'6px',bottom:'90px',top:'6px' }}>
                                    <Avatar>You</Avatar>
                                </div>
                                <div className="chat-bottom" style={{position:'absolute',bottom:'0',left:'6px',right:'6px'}}>
                                    <Input.TextArea rows={2}></Input.TextArea>
                                    <Button>视频</Button>
                                    <Button>图片</Button>
                                    <Button>发送</Button>
                                </div>

                            </div>

                        </Col>
                        <Col span={8} style={{borderLeft:'2px solid #f0f2f5',padding:'0 6px' }}>
                            <Tabs defaultActiveKey="1">
                                <TabPane tab="好友" key="1" style={{padding:'0 8px'}}>
                                    <Descriptions title={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}>
                                        <Descriptions.Item label="姓名">张三</Descriptions.Item>
                                        <Descriptions.Item label="手机" span={2}>1810000000</Descriptions.Item>
                                        <Descriptions.Item label="性别">empty</Descriptions.Item>
                                        <Descriptions.Item label="年龄">100</Descriptions.Item>
                                    </Descriptions>
                                </TabPane>
                                <TabPane tab="房间" key="2">

                                </TabPane>
                                <TabPane tab="个人设置" key="3">

                                </TabPane>
                            </Tabs>
                        </Col>
                    </Row>
                </Content>
            </Layout>
        )
    }
}
