import React, { useEffect, useState } from 'react';
import ItemProduct from '../Product/ItemProduct';
import HeaderContent from '../Content/HeaderContent';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './ProductFeature.scss';
import { getProductFeatureService } from '../../services/userService';
function ProductFeature(props) {
    let settings = {
        dots: false,
        Infinity: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000, 
        arrows: false,
    }

    const data = [
        {
        id: "1", 
        name: "Sản phẩm 1",
        productDetail: [
            {
                originalPrice: "40000",
                discountPrice: "25000",
                productImage: [{
                    image: "https://product.hstatic.net/1000069225/product/b8d9c78c-3975-4691-8b68-fa8ceacf5eef_1_201_a_81b2ccfb72694d6591ce8c003a417105_grande.jpg",
                }]
            }
        ]
        },
        {
        id: "2", 
        name: "Sản phẩm 2",
        productDetail: [
            {
                originalPrice: "40000",
                discountPrice: "25000",
                productImage: [{
                    image: "https://product.hstatic.net/1000069225/product/d4d5cc2c-47d3-4e11-855f-79f43022ac0e_1_201_a_66cfb1b824af4bb591d4cbb180e64e93_large.jpg",
                }]
            }
        ]
        },
        {
        id: "3", 
        name: "Sản phẩm 3",
        productDetail: [
            {
                originalPrice: "40000",
                discountPrice: "25000",
                productImage: [{
                    image: "https://product.hstatic.net/1000069225/product/b8d9c78c-3975-4691-8b68-fa8ceacf5eef_1_201_a_81b2ccfb72694d6591ce8c003a417105_grande.jpg",
                }]
            }
        ]
        },
        {
        id: "4", 
        name: "Sản phẩm 4",
        productDetail: [
            {
                originalPrice: "40000",
                discountPrice: "25000",
                productImage: [{
                    image: "https://product.hstatic.net/1000069225/product/d4d5cc2c-47d3-4e11-855f-79f43022ac0e_1_201_a_66cfb1b824af4bb591d4cbb180e64e93_large.jpg",
                }]
            }
        ]
        },
        {
        id: "5", 
        name: "Sản phẩm 5",
        productDetail: [
            {
                originalPrice: "40000",
                discountPrice: "25000",
                productImage: [{
                    image: "https://product.hstatic.net/1000069225/product/b8d9c78c-3975-4691-8b68-fa8ceacf5eef_1_201_a_81b2ccfb72694d6591ce8c003a417105_grande.jpg",
                }]
            }
        ]
        },
        {
        id: "6", 
        name: "Sản phẩm 6",
        productDetail: [
            {
                originalPrice: "40000",
                discountPrice: "25000",
                productImage: [{
                    image: "https://product.hstatic.net/1000069225/product/d4d5cc2c-47d3-4e11-855f-79f43022ac0e_1_201_a_66cfb1b824af4bb591d4cbb180e64e93_large.jpg",
                }]
            }
        ]
        },
    ]
    return (

        <section className="feature_product_area">
            <div className="container bg-white">
                <div style={{paddingTop:"30px"}}>
                <HeaderContent  mainContent={props.title} 
                    // infoContent="Bạn sẽ không thất vọng khi lựa chọn"
                    > 
                </HeaderContent>
                </div>

                <div className="row box-productFeature">
                    <Slider {...settings}>
                        {/* {props.data && props.data.length > 3 &&
                            props.data.map((item, index) => {
                                return (
                                    <ItemProduct id={item.id} key={index} width={350} height={419} type="col-lg-4 col-md-6" name={item.name} img={item.productDetail[0].productImage[0].image}
                                        price={item.productDetail[0].originalPrice} discountPrice={item.productDetail[0].discountPrice}>
                                    </ItemProduct>
                                )
                            })
                        } */}
                        {/* Vinh fake data Gợi ý sản phẩm */}
                        {data && data.length > 3 &&
                            data.map((item, index) => {
                                return (
                                    <ItemProduct id={item.id} key={index} width={"auto"} height={230} type="col-lg-4 col-md-6" name={item.name} img={item.productDetail[0].productImage[0].image}
                                        price={item.productDetail[0].originalPrice} discountPrice={item.productDetail[0].discountPrice}>
                                    </ItemProduct>
                                )
                            })
                        }


                    </Slider>
                </div>



            </div>
        </section>



    );
}

export default ProductFeature;