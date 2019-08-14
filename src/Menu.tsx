import * as React from 'react';
import {connect} from "react-redux";
import {Pizza} from "./App";

const MenuItems = [
    {name: "Pepperoni", price: "$12.75"},
    {name: "Pineapple", price: "$13.50"},
    {name: "Shishito Pepper", price: "$11.10"}
];

interface MenuActions {
    addToCart: (pizza: Pizza) => void;
}


export const Menu = (props: MenuActions) => {
    return <div>
        {
            MenuItems.map(menuItem => {
                return <div key={menuItem.name} className="item">{menuItem.name} {menuItem.price}
                    <button className="item__add-to-cart"
                            onClick={() => {
                                props.addToCart(menuItem)
                            }}>
                        Add To Cart
                    </button>
                </div>
            })
        }
    </div>;
};

export const mapDispatchToProps = (dispatch: any) => {
    return {
        addToCart: (selectedPizza: Pizza) => dispatch({
            type: 'ADD_PIZZA_TO_CART_ACTION',
            pizza: selectedPizza,
        })
    }
};

export default connect(null, mapDispatchToProps)(Menu)