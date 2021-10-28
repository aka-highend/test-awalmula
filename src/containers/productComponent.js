import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import imgSample from '../assets/casava.png'
import './product.css';

const renderProducts = (products) => {
  return (
    <>
      {products.map((product) => {
        const { sku, position, category_id } = product
        return (
          <div className="four column wide" key={sku}>
            <Link to={`/product/${sku}`}>
              <div className="ui link cards">
                <div className="card">
                  <div className="image">
                    <img src={imgSample} alt="gambar"/>
                  </div>
                  <div className="content">
                    <div className="header">Product: {sku}</div>
                    <div className="meta price">Position: {position}</div>
                    <div className="meta">{category_id}</div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )
      })}
    </>
  );
}

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  console.log('PRODUCT COMPONENT', products);

  // const [products, setProducts] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);

  const [pageNumberLimit] = useState(6);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(6);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  const handleClick = (event) => {
    setCurrentPage(Number(event.target.id));
  };

  const pages = [];
  for (let i = 1; i < Math.ceil(products.length / itemsPerPage); i++) {
    pages.push(i);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  const renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li 
          key={number} 
          id={number} 
          onClick={handleClick} 
          className={currentPage === number ? "active" : null}
        >
          {number}
        </li>
      );
    } else {
      return null;
    }
  });

  const handleNextBtn = () => {
    setCurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevBtn = () => {
    setCurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  let pageIncrementBtn = null;
  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = <li onClick={handleNextBtn}> &hellip; </li>
  }

  let pageDecrementBtn = null;
  if (pages.length > maxPageNumberLimit) {
    pageDecrementBtn = <li onClick={handlePrevBtn}> &hellip; </li>
  }

  return (
    <>
      {Object.keys(currentItems).length === 0 ? (
        <div className="loading-data">
          <h1 className="loading-text">Loading Data...</h1>
        </div>
      ) : (
        <>
          {renderProducts(currentItems)}
          <ul className="page-numbers">
            <li>
              <button onClick={handlePrevBtn} disabled={currentPage === pages[0] ? true : false}>
                Prev
              </button>
            </li>
            {pageDecrementBtn}
            {renderPageNumbers}
            {pageIncrementBtn}
            <li>
              <button onClick={handleNextBtn} disabled={currentPage === pages[pages.length - 1] ? true : false}>
                Next
              </button>
            </li>
          </ul>
        </>
      )}
    </>
  )
};

export default ProductComponent;