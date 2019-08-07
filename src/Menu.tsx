import * as React from 'react';

const MenuItems = [
    {name: "Pepperoni", price: "$12.75"},
    {name: "Pineapple", price: "$13.50"},
    {name: "Shishito Pepper", price: "$11.10"}
];

export const Menu = (props: { addToCart: (pizza: { name: string, price: string }) => void }) => {
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