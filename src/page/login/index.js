import React from 'react';
import { connect } from 'react-redux'; 
import GlobalFunc from '../../util/getGlobal';

import { useHistory } from 'react-router-dom';
let Login = (props) => {
    const history = useHistory();
    let loginFunc = () => {
        localStorage.setItem('isLogin', true);
        alert('登陆成功');
        history.replace('/');
    }
    let describeRedux = () => {
        props.getHeight();
        props.getWidth();
    }
    return (
        <div>
            <div>Redux数据获取:</div>
            <span>{JSON.stringify(props.global)}</span>
            <button onClick={describeRedux}>点击获取当前屏幕宽高</button>
            <button onClick={loginFunc}>点击登录</button>
        </div>
    )
}

// redux
Login = connect(...GlobalFunc)(Login)
export default Login;