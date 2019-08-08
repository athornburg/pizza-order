import * as React from 'react';
import {Menu} from "./Menu";
import {Cart} from "./Cart";
import {useState} from "react";

export const App = () => {
    const [pizzas, setPizzas] = useState([]);
    return <div>
        <Menu addToCart={(pizza: { name: string, price: string }) => {
            const newPizzas = [...pizzas, pizza];
            setPizzas(newPizzas)
        }}/>
        <Cart pizzas={pizzas}/>
    </div>
};