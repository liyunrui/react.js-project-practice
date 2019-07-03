import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import { Button,Input,Checkbox } from 'antd';

function Todofooter(props){
    // props 傳入的是object 
    return (
        <div>
            <h4 style={{marginTop:'50px'}}>{props.notDoneCount}未完成/{props.todos.length}總數</h4>
        </div>
    )
}

export default Todofooter