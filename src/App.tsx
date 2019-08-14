import * as React from 'react';
import Menu from "./Menu";
import Cart from "./Cart";

export interface Pizza {
    name: string;
    price: string;
}

export const App = () => {
    return <div>
        <Menu/>
        <Cart/>
    </div>
};