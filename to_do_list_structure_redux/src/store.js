import { createStore } from 'redux'


// Step1: define reducer function and store（這是一個global state, 大家不會這樣稱呼）
function reducer_function(state, action) {
  switch (action.type) {
        // action 有兩種: action.type和action.paylad
        
        // defined an action type called ADD_NAME
    case 'Change_NAME':
        // update old state into new state through action
        // store 是一個 state 裡面其中的 key叫做action, 可以有很多個keys
        const update_change = action.payload.name
        return {...state,store:update_change}
    default:
        // if there is no any action type, we won't change state（kepp the same)
        return state
  }
}

// Step2: 初始化store的state為空字串
let store = createStore(reducer_function,{store:''})

// Step3:make other js scrips to read this store (global state)
export default store;