import * as React from 'react';
import {shallow} from "enzyme";
import {Menu} from "../Menu";

describe('Menu', function () {
    it('should have pizzas and prices', () => {
        const menu = shallow(<Menu addToCart={jest.fn()}/>);

        let items = menu.find('.item');
        expect(items.length).toEqual(3);

        expect(items.at(0).text()).toContain("Pepperoni $12.75");
        expect(items.at(1).text()).toContain("Pineapple $13.50");
        expect(items.at(2).text()).toContain("Shishito Pepper $11.10");
    });

    it('should have a button that adds the price and pizza type to the cart for pineapple', () => {
        const mockAddToCart = jest.fn();

        const menu = shallow(<Menu addToCart={mockAddToCart}/>);

        const button = menu.find('.item').at(1).find('.item__add-to-cart');

        button.simulate('click');

        expect(mockAddToCart).toBeCalledWith({
            name: 'Pineapple',
            price: '$13.50'
        })
    });

    it('should have a button that adds the price and pizza type to the cart for pepperoni', () => {
        const mockAddToCart = jest.fn();

        const menu = shallow(<Menu addToCart={mockAddToCart}/>);

        const button = menu.find('.item').at(0).find('.item__add-to-cart');

        button.simulate('click');

        expect(mockAddToCart).toBeCalledWith({
            name: 'Pepperoni',
            price: '$12.75'
        })
    });
});