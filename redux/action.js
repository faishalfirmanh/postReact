import { ADD,MINUS } from "./tipe";
export const tambahCounter = (counter)=>({
    type:ADD,
    data:counter
})

export const kurangCounter = (counter)=>({
    type:MINUS,
    data:counter
})