import { observer } from "mobx-react-lite";
import React from "react";
import DefaultStore from "../../Store/Default";
import './InteractivePlugin.scss'

const InteractivePlugin = observer(() => {
    if (DefaultStore.getHeaderSwitch()) {
        return (<div id="interactivePlugin" className="activ"></div>)
    }
    return (
        <div id="interactivePlugin"></div>
    )
})

export default InteractivePlugin;