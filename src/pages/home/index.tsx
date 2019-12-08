import React, { Component } from 'react';
import { Layout, Row, Col, Avatar, Tabs, Collapse, List, Descriptions, Input, Button, } from 'antd';
import HeaderComponet from '../../components/header';
import UserRoomListComponent from '../../components/userRoomList';
import InputControlComponent from '../../components/inputControl';
import MessageListComponent from '../../components/messageList';
import '../../css/style.css';
const { Header, Content, Sider } = Layout;
const { TabPane } = Tabs;
const { Panel } = Collapse;

export default class HomeComponent extends Component {
    state = {
        chats: [{
            id: 1,
            content: '今晚去哪吃饭？',
            chatFrom: 'own'
        }, {
            id: 2,
            content: '去吃肯德基吧',
            chatFrom: 'buddy'
        }, {
            id: 3,
            content: '怎么又是肯德基',
            chatFrom: 'own'
        }, {
            id: 4,
            content: '那你说去哪？',
            chatFrom: 'buddy'
        }],
        recentAccess: [{
            title: 'zhangsan',
        }, {
            title: 'lisi',
        }, {
            title: '王五',
        },
        {
            title: '马六',
        }]
      };

    handleSendMsg = (msg: any) => {
        console.log(msg);
        this.setState({
            chats: [...this.state.chats, {
                id: new Date().getTime(),
                content: msg,
                chatFrom: 'own'
            }]
        });
    }

    render() {
        return (
            <Layout>
                <HeaderComponet />
                <Content style={{ position: 'absolute', top: '66px', bottom: '0px', width: '100%' }}>
                    <Row type="flex" style={{ minHeight: '500px' }}>
                        <Col span={6} style={{ padding: '0 2px', borderRight: '2px solid #f0f2f5', position: 'relative' }}>
                            <div style={{ position: 'absolute', bottom: '0', left: '0', right: '1px', top: '0', overflowY: 'scroll' }}>
                                <Tabs defaultActiveKey="1">
                                    <TabPane tab="最近联系" key="1">
                                        <UserRoomListComponent itemSource={this.state.recentAccess} />
                                    </TabPane>
                                    <TabPane tab="好友" key="2">
                                        {/*<Collapse defaultActiveKey="1" bordered={false}>
                                            <Panel header="开发部" key="1">
                                                <UserRoomListComponent />
                                            </Panel>
                                            <Panel header="销售部" key="2">
                                                <UserRoomListComponent />
                                            </Panel>
                                            <Panel header="运维部" key="3">
                                                <UserRoomListComponent />
                                            </Panel>
                                        </Collapse>*/}
                                    </TabPane>
                                </Tabs>
                            </div>
                        </Col>
                        <Col span={18} style={{ padding: '0 16px', position: "relative" }}>
                            <div className="chat-room" >
                                <MessageListComponent chats={this.state.chats}/>
                                <div className="chat-bottom" style={{position:'absolute',bottom:'0',left:'6px',right:'6px'}}>
                                    <InputControlComponent onSendMsg={this.handleSendMsg}/>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Content>
            </Layout>
        )
    }
}
