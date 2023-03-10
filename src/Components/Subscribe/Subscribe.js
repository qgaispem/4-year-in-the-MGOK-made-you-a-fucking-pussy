import React from "react";
import './Subscribe.scss'
import { Button, Input,Space } from "antd";

function Subscribe(){
    return (
        <div className="subscribe">
            <Space direction="vertical">
            <div className="header">SUBSCRIBE</div>
            <div className="context">
            Lorem ipsum dolor sit amet consectetur. Nibh et sit pellentesque aliquam. Ullamcorper purus fringilla commodo elit quisque. Sed non tellus elit erat scelerisque. Donec cum aliquam quisque nibh purus aliquam auctor.
            </div>
            
            <div className="label">Telegram:</div>

            <Input></Input>

            <div className="label">Email:</div>
            <Input></Input>

            
            <Button type="primary" ghost size="small">Subscribe</Button>
            </Space>
        </div>
    )
   
}

export default Subscribe