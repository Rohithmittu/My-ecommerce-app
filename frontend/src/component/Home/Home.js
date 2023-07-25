import React, { Fragment } from "react";
import { FaMouse } from "react-icons/fa";
import "./Home.css";
import Product from "./ProductCard.js";
import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";


const Home = () => {

  const alert = useAlert();
  const dispatch = useDispatch();
  // eslint-disable-next-line
  const { loading, error, products } = useSelector(
    state => state.products
  );

  useEffect(() => {

    if(error){
      alert.error(error);
       dispatch(clearErrors())
       // eslint-disable-next-line
    }

    dispatch(getProduct());
  }, [dispatch,error,alert]);
   // eslint-disable-next-line
  return (
    <Fragment>
      {loading ? (
        <Loader/>
      ) : (
        <Fragment>
          <MetaData title='ECCOMERCE' />
          <div className='banner'>
            <p>Welcome to Ecommerce</p>
            <h1>FIND AMAZING PRODUCTS BELOW</h1>

            <a href='#container'>
              <button>
                scroll <FaMouse />
              </button>
            </a>
          </div>
          <h2 className='homeHeading'>Featured Products</h2>
          <div className='container' id='container'>
            {products && products.map(product => <Product product={product} />)}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;