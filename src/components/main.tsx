import React, { Component } from 'react'
import { Layout } from "antd";

export default class MainComponet extends Component {
    render() {
        return (
            <Layout style={{ display: 'flex', alignItems: 'center', height: '100vh' }}>
                <h2>欢迎来到Avchat！</h2>
            </Layout>
        )
    }
}
