import * as React from 'react';
import {shallow} from "enzyme";
import {App, Pizza} from "../App";
import {Menu} from "../Menu";
import {Cart} from "../Cart";

describe("App", () => {
    const pizza: Pizza = {
        name: "Pineapple",
        price: "$12.75"
    };
    it('should say hello', () => {
        const app = shallow(<App/>);

        expect(app.find(Menu).exists()).toBe(true);
    });

    it('should add a pizza to cart', () => {
        const app = shallow(<App/>);

        app.find(Menu).props().addToCart(pizza);

        expect(app.find(Cart).props()).toEqual({
            pizzas: [pizza]
        })
    });
});