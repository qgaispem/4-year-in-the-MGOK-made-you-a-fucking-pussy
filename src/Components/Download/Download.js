import React from "react";
import './Download.scss'
import { observer } from "mobx-react-lite"
import { Button, Divider } from 'antd';
import defaultStore from '../../Store/Default'
const Download = observer(() => {
    return (
        <div className="downloadBtn">
            <Divider className="downloadDivider">            
                <Button type="primary" ghost href={defaultStore.downloadUrl}>DOWNLOAD</Button>
            </Divider>

        </div>
    )
})
export default Download