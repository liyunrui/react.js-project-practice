import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import { Button,Input,Checkbox } from 'antd';

function TodoItem(props){
    // form is 表單(輸入框): 裡面有一個值, 兩個值
    // props 傳入的是object 
    return (
        <div>
          <div key={props.index}>
            {/* {利用html input 屬性裡面的type == checkbox, 讓他變成使用者可以打勾} */}
            <Checkbox onChange={()=>props.check(props.index)} type="checkbox"/>
            <p style={props.todo.done?{textDecoration:'line-through', display: 'inline'}:{display: 'inline'}}>
              {props.todo.description}
            </p>
          </div> 
        </div>
    )
}

export default TodoItem