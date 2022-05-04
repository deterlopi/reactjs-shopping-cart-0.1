import React from 'react';
import PropTypes from 'prop-types';
import CartItem from './CartItem';
import { useNavigate } from "react-router-dom";

const Cart = ({ items, total, currency, removeFromCart, Image}) => {
        const navigate = useNavigate();
        const goToResume = () => {
        navigate('/sale') //, { replace: true }
        }
    return (
        <div>
            <h3>Shopping Cart</h3>

            <div className="cart">
                <div className="panel panel-default">
                    <div className="panel-body">
                        {items.length > 0 && (
                            <div className="cart__body">
                                {items.map(item => (
                                    <CartItem key={item.id} {...item} 
                                    onClick={() => 
                                        removeFromCart(item.id)
                                    
                                    } />
                                    
                                ))}
                            </div>
                            
                            
                        )
                        
                        }
                        {items.length == 0 && (
                        <div className="alert alert-info">Cart is empty</div>
                        )}
                        <div className="cart__total">Total: {total} {currency}</div>
                        
                        {items.length > 0 && (
                        <button type="button" class="btn btn-primary" 
                            onClick={goToResume} 
                            data-toggle="button" 
                            aria-pressed="false" 
                            autocomplete="off">Shopping Cart
                        </button>
                        )}
                    
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

    Cart.propTypes = {
    items: PropTypes.array,
    total: PropTypes.number,
    currency: PropTypes.string,
    removeFromCart: PropTypes.func.isRequired
}

export default Cart;

