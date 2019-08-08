import * as React from 'react';

export const Cart = (props: { pizzas: { name: string, price: string }[] }) => {
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