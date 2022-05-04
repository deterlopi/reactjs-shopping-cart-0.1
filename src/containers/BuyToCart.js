import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";
import { connect } from 'react-redux';
import { getItems, getCurrency, getTotal, removeFromCart } from '../ducks/cart';



const Cart = ({ items, total, currency, removeFromCart}) => {
        const navigate = useNavigate();
        const goToShopping = () => {
            navigate('/') //, { replace: true }
            }
    return (
        <div>
            <h3>Resume Cart</h3>
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
                        <div className="cart__total">Total + 16% iva: {total*1.16} {currency}</div>
                        <button type="button" class="btn btn-primary" 
                            onClick={goToShopping} 
                            data-toggle="button" 
                            aria-pressed="false" 
                            autocomplete="off">Back
                        </button>
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

const CartItem = ({ name, price, currency, onClick, id }) => {
    return (
        <div className="cart-item">
            <div>
                <button className="btn btn-danger btn-xs" onClick={onClick}>X</button>
                <span className="cart-item__name">{name}</span>
            </div>
            <div className="cart-item__price">{price} {currency}</div>
            <img src={`images/0${id}.jpg`}
            width="150" height="150"
            />
        </div>
    );
}

CartItem.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}


const mapStateToProps = (state, props) => {
    return {
        items: getItems(state, props),
        currency: getCurrency(state, props),
        total: getTotal(state, props)
    }
}

const mapDispatchToProps = (dispatch) => ({
    removeFromCart: (id) => dispatch(removeFromCart(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

