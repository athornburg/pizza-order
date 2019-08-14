import * as React from 'react';
import {shallow} from "enzyme";
import {Cart, mapStateToProps} from "../Cart";

describe("Cart", function () {
    it('should show the pizzas in the cart', () => {
        const cart = shallow(<Cart
            selectedPizzas={
                [
                    {name: 'Pineapple', price: "$12.75"},
                    {name: 'Shishito Pepper', price: "$11.50"}
                ]
            }/>
        );

        expect(cart.find(".cart-item").length).toEqual(2);
        expect(cart.find(".cart-item").at(0).text())

            .toEqual("Pineapple $12.75");
        expect(cart.find(".cart-item").at(1).text())
            .toEqual("Shishito Pepper $11.50");
    });

    it('map state to props should map selected pizzas', () => {
        const actual = mapStateToProps([{name: 'Best Pizza', price: '$20.00'}]);
        expect(actual.selectedPizzas).toEqual([{name: 'Best Pizza', price: '$20.00'}]);
    })
});