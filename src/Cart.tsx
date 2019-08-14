import * as React from 'react';
import {Pizza} from "./App";

export const Cart = (props: { pizzas: Pizza[] }) => {
    return <div>
        <div> Cart</div>
        {
            (props.pizzas).map((pizza: any) => {
                return <div key={pizza}
                            className="cart-item">
                    {pizza.name} {pizza.price}</div>
            })
        }
    </div>
};