import * as React from 'react';
import {Pizza} from "./App";
import {connect} from "react-redux";

type CartPropsFromRedux = {
    selectedPizzas: Pizza[]
}

export const Cart = (props: CartPropsFromRedux) => {
    return <div>
        <div> Cart</div>
        {
            (props.selectedPizzas).map((pizza: any) => {
                return <div key={pizza}
                            className="cart-item">
                    {pizza.name} {pizza.price}</div>
            })
        }
    </div>
};

export const mapStateToProps = (state: any): CartPropsFromRedux => {
    return {
        selectedPizzas: state
    }
};

export default connect(mapStateToProps, null)(Cart)