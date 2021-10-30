import React from 'react';
import { useParams } from 'react-router-dom';
import imgSample from '../assets/casava.png';

// import './product.css'

const ProductDetail = () => {
  const productId = useParams();
  console.log("PRODUCT ID SKU", productId);

  return (
    <div className="ui placeholder segment">
      <div className="ui two column stackable center aligned grid">
        <div className="ui vertical divider">AND</div>
          <div className="middle aligned row column-container">
            <div className="column lp">
              <img className="ui fluid image" src={imgSample} alt="gmbr-detail" />
            </div>
            <div className="column rp">
              <h1>"BARANG BAGUS"</h1>
              <h2>
                <div className="ui teal tag label">Rp 100.000</div>
              </h2>
              <h3 className="ui brown block header">Ini kategori</h3>
              <p>Ini adalah contoh dari sebuah detail produk. Contoh detail produk ini menampilkan detail dari produk tentunya, kalau tidak menampilkan detail dari suatu produk berarti bukan detail produk namanya.</p>
              <div className="ui vertical animated button" tabIndex="0">
                <div className="hidden content">
                  <i className="shop icon"></i>
                </div>
                <div className="visible content">Add to Cart</div>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
};

export default ProductDetail;