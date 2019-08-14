import {pizzaReducer} from "./pizzaReducer";

describe('Pizza Reducer', () => {
    it('ADD_PIZZA_TO_CART_ACTION should add pizzas', () => {
        const actual = pizzaReducer(
            [{name: 'bestest pizza', price: '$21.00'}],
            {
                type: 'ADD_PIZZA_TO_CART_ACTION',
                pizza: {name: 'best pizza', price: '$20.00'}
            }
        );
        expect(actual).toEqual([
            {name: 'bestest pizza', price: '$21.00'},
            {name: 'best pizza', price: '$20.00'},
        ])
    });

    it('should return state for any other actions', () => {
        const actual = pizzaReducer(
            [{name: 'bestest pizza', price: '$21.00'}],
            {
                type: 'STUPID_ACTION',
                pizza: {name: 'best pizza', price: '$20.00'}
            }
        );

        expect(actual).toEqual([
            {name: 'bestest pizza', price: '$21.00'}
        ])
    })

});