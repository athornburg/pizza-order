import * as React from 'react';
import {useState} from 'react';
import {Menu} from "./Menu";
import {Cart} from "./Cart";

export interface Pizza {
    name: string;
    price: string;
}

export const App = () => {
    const [pizzas, setPizzas] = useState([]);
    return <div>
        <Menu addToCart={(pizza: Pizza) => {
            setPizzas([...pizzas, pizza])
        }}/>
        <Cart pizzas={pizzas}/>
    </div>
};