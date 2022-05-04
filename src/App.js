import React from 'react';
import Cart from './containers/Cart';
import ProductList from './containers/ProductList';
import { useApp } from './useApp';

const App = () => {
    const { isAdmin } = useApp();
    return (
        <>
            <nav className="navbar navbar-primary bg-primary">
                <span className="navbar-brand mb-0 h1">{isAdmin ? 'Administrador' : 'Invitado'}</span>
            </nav>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Virtual Shop</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8">
                        <ProductList />
                    </div>
                    <div className="col-md-4">
                        <Cart />
                    </div>
                </div>

                <footer>
                    <small>
                        powered by <a href="http://www.kikoya.mx/">Kikoya</a>
                    </small>
                </footer>
            </div>
        </>
    );
}

export default App;
