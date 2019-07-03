import React,{useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import { Button,Input,Checkbox } from 'antd';
import TodoForm from '../components/TodoForm/TodoForm.js'
import TodoFooter from '../components/TodoList/Todofooter.js'
import TodoItem from '../components/TodoList/TodoItem.js'
import {useMappedState,useDispatch} from 'redux-react-hook';

function App() {

  // mock object  [
  //   {description:'xxx',done:false},
  //   {description:'xxx2',done:true},
  //   {description:'xxx3',done:false}
  // ]

  // step1: initilize all states we need:
  // 1. todes --> array
  // 2.
  // 3. notDoneCount --> int
  const [todos,setTodos] = useState(
    // default of tods is an empty array
    // Later, we will push the object into todos.
    [
      // {description:'xxx',done:false},
      // {description:'xxx2',done:false},
      // {description:'xxx3',done:false}
    ]
  )

  const [input,setInput] = useState('')
  const [notDoneCount,setNotDoneCount] = useState(0)
  // step2: 讀取state(監聽)
  const name = useMappedState(state=> state.store);
  // step1:存入 prompt 內容到 global state
  const dispatch = useDispatch()
  useEffect(()=>{
    const answer = prompt('請問你的名字是 ？')
    dispatch({type:"Change_NAME",payload:{name:answer}})
  },[])
  // step2: defien the function we nedd 
  const check=(todoId)=>{
    // check --> 打勾 server

    // copy array
    const newTodos = [...todos]
    // update conetent of array
    newTodos[todoId].done =  newTodos[todoId].done ? false:true
    // update count
    if(newTodos[todoId].done){
      setNotDoneCount(notDoneCount-1)
    }else{
      setNotDoneCount(notDoneCount+1)
    }
    setTodos(newTodos)
  }

  const todoNewInput=(e)=>{
    // get input (task) from user
    setInput(e.target.value)
  }

  const add=()=>{
    // add new task into todos array
    const newTodos = [...todos]
    const coentent_of_todo = {description:input,done:false}
    newTodos.push(coentent_of_todo)
    setTodos(newTodos)
    // improve user's ex
    setInput('')
    setNotDoneCount(notDoneCount+1)
  }

  return (
    <div className="App">
      <h1 style={{marginTop:'50px'}}>{name} 的 React Todo List</h1>
      {/* <input type="checkbox"/>你好 */}
      {
        todos.map((todo,index)=>{
        return(
            <TodoItem index={index} check = {check} todo = {todo}/>
          )
        })
      }
      <TodoFooter notDoneCount = {notDoneCount} todos = {todos}/>
      {/* JSＸ的功能就是可以把import 的 function當作元件使用 */}
      <TodoForm inputProps={input} addProps = {add} todoNewInputProps = {todoNewInput}/>
    </div>
  );
}

export default App;