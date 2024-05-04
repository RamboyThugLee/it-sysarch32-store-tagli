import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'; // Import Link from react-router-dom
import { db } from './config/firebase.js';
import { doc, getDoc } from 'firebase/firestore';

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      const docRef = doc(db, 'product', id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setProduct(docSnap.data());
      } else {
        console.log('No such document!');
      }
    }
    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Product Details</h1>

      <div>
        <img src={product.product_img} alt="Product" />
        <p>Name: {product.product_name}</p>
        <p>Price: ${product.product_price}</p>
        <p>Description: {product.product_description}</p>
        <p>Quantity: {product.product_quantity}</p>
      </div>
      <div>
      <Link to="/" className="back-link">Back to Products</Link>
      </div>
    </div>


  );
}

export default ProductDetails;