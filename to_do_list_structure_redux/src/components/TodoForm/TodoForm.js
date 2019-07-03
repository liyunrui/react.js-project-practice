import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import { Button,Input,Checkbox } from 'antd';

function TodoForm(props){
    // form is 表單(輸入框): 裡面有一個值, 兩個值
    // props 傳入的是object 
    return (
        <div>
            {/* input裡面的值如果有更動, 就會去執行onChange的function */}
            {/* value = input(父類裡面的state) */}
            {/* value = props.inputProps 透過這種方式把父類的input state傳入*/}
            {/* onChange={props.todoNewInputProps} 透過這種方式把父類的todoNewInput傳入*/}
            {/* onClick={props.addProps} 透過這種方式把父類的add傳入*/}

            <Input style ={{width : '250px'}} value={props.inputProps} onChange={props.todoNewInputProps}/>
            <Button onClick={props.addProps}>新增任務</Button>
        </div>
    )
}

export default TodoForm