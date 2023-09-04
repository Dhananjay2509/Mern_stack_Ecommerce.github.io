import React, { Fragment, useEffect } from "react";
import "./Product.css";
import { useSelector, useDispatch } from "react-redux";
import { getProduct } from "../../actions/productAction.js";
import Loader from "../layout/Loader/Loader.js";
import ProductCard from "../Home/ProductCard.js";

const Product = () => {
  const dispatch = useDispatch();
  const {products, loading} = useSelector((state)=>state.products)
  useEffect(() => {

    dispatch(getProduct());
  }, [dispatch]);

  return <Fragment>{loading ? <Loader /> : <Fragment>
    {/* <MetaData title="PRODUCTS -- ECOMMERCE" /> */}
          <h2 className="productsHeading">Products</h2>

          <div className="products">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>
    </Fragment>}</Fragment>;
};

export default Product;
