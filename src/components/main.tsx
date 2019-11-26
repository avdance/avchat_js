import React, { Component } from 'react'
import { Layout } from "antd";
import ChatRoomComponent from './chatroom'

export default class MainComponet extends Component {
    render() {
        return (
            <React.Fragment>
                <ChatRoomComponent />
            </React.Fragment>
        )
    }
}
