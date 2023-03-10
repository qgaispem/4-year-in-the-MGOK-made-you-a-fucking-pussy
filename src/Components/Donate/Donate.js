import React from "react";
import './Donate.scss'
import { Button,Space } from "antd";

function Donate(){
    return (
        <div className="donate">
            <div  className="header">
            DONATE
            </div>
            <div>
                <Space>
                    <Button type="primary" ghost>PUT YOUR MONEY HERE</Button>
                    <div className="context">
                    Lorem ipsum dolor sit amet consectetur. Nibh et sit pellentesque aliquam. Ullamcorper purus fringilla commodo elit quisque
                    </div>
                </Space>
            </div>
        </div>
    )
}

export default Donate