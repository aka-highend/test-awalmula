import React, { useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { setProducts } from '../redux/actions/productActions';
import ProductComponent from './productComponent';

import './product.css';

const ProductListing = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios.get("https://staging-am.awalmula.co.id/rest/default/V1/categories/2/products").catch((err) => {
      console.log("Error", err);
    });
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  console.log('PRODUCTS: ', products);
  
  return (
    <div className="ui grid container centered product-container">
      <ProductComponent/>
    </div>
  )
};

export default ProductListing;