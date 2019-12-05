import React, { Component } from 'react'
import { Layout } from "antd";
import ChatRoomComponent from './chatroom'
import LoginComponent from './login'

export default class MainComponet extends Component {
    render() {
        return (
            <React.Fragment>
                <LoginComponent />
            </React.Fragment>
        )
    }
}
