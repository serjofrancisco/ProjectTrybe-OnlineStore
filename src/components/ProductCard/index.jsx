import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class ProductCard extends Component {
  render() {
    const { title, thumbnail, price, id, addProductToCart } = this.props;
    return (
      <div id="container" data-testid="product">
        <Link to={ `/product-details/${id}` } id={ id }>
          <div data-testid="product-detail-link" id={ id }>
            <h3>{ title }</h3>
            <img src={ thumbnail } alt="" />
            <p>{`R$: ${price} `}</p>
          </div>
        </Link>
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ addProductToCart }
        >
          Add to Cart
        </button>
      </div>
    );
  }
}

ProductCard.propTypes = {
  title: PropTypes.string,
  thumbnail: PropTypes.string,
  price: PropTypes.number,
  id: PropTypes.string,
}.isRequired;
