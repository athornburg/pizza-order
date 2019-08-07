import * as React from 'react';
import {shallow} from "enzyme";
import {Cart} from "../Cart";

describe("Cart", function () {
    it('should show the pizzas in the cart', () => {
        const cart = shallow(<Cart pizzas={
            {
                Pineapple: "$12.75",
                "Shishito Pepper": "$11.50"
            }
        }/>);

        expect(cart.find(".cart-item").length).toEqual(2);
        expect(cart.find(".cart-item").at(0).text())
            .toEqual("Pineapple $12.75");
        expect(cart.find(".cart-item").at(1).text())
            .toEqual("Shishito Pepper $11.50");
    });
});