import React, { Fragment, useEffect } from "react";
import "./Products.css";
import { useSelector, useDispatch } from "react-redux";
import { getProduct } from "../../actions/productAction.js";
import Loader from "../layout/Loader/Loader.js";
import ProductCard from "../Home/ProductCard.js";
import { useParams } from "react-router-dom";
import MetaData from "../layout/MetaData.jsx"

const Products = () => {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.products);

  const {keyword}= useParams();

  useEffect(() => {
    dispatch(getProduct(keyword));
  }, [dispatch, keyword]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="PRODUCTS -- ECOMMERCE" />
          <h2 className="productsHeading">Products</h2>

          <div className="products">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Products;
