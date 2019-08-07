import * as React from 'react';

export const Cart = (props: { pizzas: any }) => {
    return <div>
        <div> Cart</div>
        {
            (Object.keys(props.pizzas)).map((pizza: any) => {
                return <div key={pizza}
                            className="cart-item">
                    {pizza} {props.pizzas[pizza]}</div>
            })
        }
    </div>
};