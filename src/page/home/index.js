import React, { useState } from 'react';
import { connect } from 'react-redux';
import store from '../../store';
import GlobalFunc from '../../util/getGlobal';
import { useHistory } from 'react-router-dom';
let Home = (props) => {
    const history = useHistory();
    const [outerStyle, setOuterStyle] = useState({})
    let describeReduxHeight = () => {
        props.getHeight();
    }
    let describeReduxWidth = () => {
        props.getWidth();
    }
    let unSubscribe = store.subscribe(() => {
        let { global } = store.getState();
        setOuterStyle({
            height: global.height + "px",
            width: global.width + "px",
            background: "#000",
            color: global.width ? "#fff" : "#000"
        })
        unSubscribe()
    })
    return (
        <div>
            <div>从redux获取的数据为：{JSON.stringify(props.global)}</div>
            <button className="height_button" onClick={describeReduxHeight}>设置高</button>
            <button onClick={describeReduxWidth}>设置宽</button>
            <div className="showDiv" style={outerStyle}>
                {JSON.stringify(outerStyle)}
            </div>
        </div>
    )
}
// 连接
Home = connect(...GlobalFunc)(Home)
export default Home;