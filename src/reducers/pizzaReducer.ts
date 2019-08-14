import {Pizza} from "../App";

export function pizzaReducer(state: Pizza[] = [], action: any): any {
    console.log('I am here', action);
    if (action.type === 'ADD_PIZZA_TO_CART_ACTION') {
        let newVar = [...state, action.pizza];
        console.log(newVar);
        return newVar;
    } else {
        return state
    }
}