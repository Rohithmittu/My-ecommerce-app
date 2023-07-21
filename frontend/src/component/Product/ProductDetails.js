import React, { Fragment, useEffect } from "react";
import Carousel from "react-material-ui-carousel";
import "./ProductDetails.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getProductDetails } from "../../actions/productAction";
import {  useParams } from "react-router-dom";
import { Rating } from "@mui/material";

import ReviewCard from "./ReviewCard.js"
import Loader from "../layout/Loader/Loader"
import {useAlert} from "react-alert"


const ProductDetails = ({ match }) => {
  const dispatch = useDispatch();
  const {id} = useParams();
  const alert = useAlert();


  const { product, loading, error } = useSelector(
    state => state.productDetails
  );

  useEffect(() => {
    if(error){
       alert.error(error);
       dispatch(clearErrors())
    }
    dispatch(getProductDetails(id));
  }, [dispatch,id,error,alert]);

  const options ={
    edit:false,
    color:"red",
    activeColor:"tomato",
    // size: window.innerwidth < 600 ? 20 : 25,
    // size: window.innerWidth < 600 ? 20 : 25,
    value: product.ratings,
    isHalf:true,

  }

  return (
    <Fragment>
      {loading? <Loader /> : (<Fragment>
      <div className='ProductDetails'>
        <div>
        <div>
          <Carousel>
            {product.images &&
              product.images.map((item, i) => (
                <img
                  className='CarouselImage'
                  key={item.url}
                  src={item.url}
                  alt={`${i} Slide`}
                />
              ))}
          </Carousel>
        </div>
        <div className='detailsBlock-1'>
          <h2>{product.name}</h2>
          <p>Product # {product._id}</p>
        </div>
        <div className='detailsBlock-2'>
          <Rating {...options} />

        

          <span>({product.numOfReviews} Reviews)</span>
        </div>
        <div className='detailsBlock-3'>
          <h1>{`${product.price}`}</h1>
          <div className='detailsBlock-3-1'>
            <div className='detailsBlock-3-1-1'>
              <button>-</button>
              <input value='1' type='number' />
              <button>+</button>
            </div>
            <button>Add to cart</button>
          </div>
          <p>
            Status:
            <b className={product.Stock < 1 ? "redcolor" : "greenColor"}>
              {product.Stock < 1 ? "OutOfStock" : "InStock"}
            </b>
          </p>
        </div>

        <div className='detailsBlock-4'>
          Description: <p>{product.description}</p>
        </div>
        <button className='submitReview'>Submit Review</button>
      </div>
      </div>
      <h3 className="reviewHeading" > REVIEWS</h3>
      {product.review && product.review[0] ? (
        <div className="reviews">
          {product.review && 
          product.reviews.map((review) => <ReviewCard review={review} />)}
        </div>
      ) : (
        <p className="noReviews"> No Review Yet </p>
      ) }
    </Fragment>)}
    </Fragment>
    
  );
};

export default ProductDetails;
