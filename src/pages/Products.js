import React, {Component} from 'react';
// import { connect } from 'react-redux';

import MainNavigation from '../components/MainNavigation';
// import { addProductToCart } from '../store/actions';
import './Products.css';

import ShopContext from '../context/shop-context';

class ProductsPage extends Component {

    render() {
        return (
            <ShopContext.Consumer>
                {(context) => {
                    return (
                        <>
                            <MainNavigation cartItemNumber={context.cart.reduce((count, curItem) => {
                                return count + curItem.quantity;
                            }, 0)} />
                            <main className="products">
                                <ul>
                                    {context.products.map(product => (
                                        <li key={product.id}>
                                            <div>
                                                <strong>{product.title}</strong> - ${product.price}
                                            </div>
                                            <div>
                                                <button
                                                    onClick={context.addProductToCart.bind(this, product)}
                                                >
                                                    Add to Cart
                                                </button>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </main>
                        </>
                    )
                }}
            </ShopContext.Consumer>

        );
    }
}

// const mapStateToProps = state => {
//   return {
//     products: state.products,
//     cartItemCount: state.cart.reduce((count, curItem) => {
//       return count + curItem.quantity;
//     }, 0)
//   };
// };
//
// const mapDispatchToProps = dispatch => {
//   return {
//     addProductToCart: product => dispatch(addProductToCart(product))
//   };
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(ProductsPage);

export default ProductsPage;
