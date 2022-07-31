import { ADD, MINUS } from "./tipe";

const initData ={
    counter: 0
}

export const reduceCounter = (state = initData, action)=>{
    switch(action.type){
        case ADD:
            console.log('add');
            return {...state,counter:action.data + 1}
        case MINUS:
            console.log('kurang');
            return {...state,counter:action.data-1}
        default: return state;
    }
}