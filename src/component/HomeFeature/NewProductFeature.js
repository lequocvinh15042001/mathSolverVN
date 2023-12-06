import React from 'react';
import ItemProduct from '../Product/ItemProduct';
import HeaderContent from '../Content/HeaderContent';
function NewProductFeature(props) {

    const data = [
        {
        id: "1", 
        name: "Sản phẩm 1",
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
                    image: "https://product.hstatic.net/1000069225/product/d4d5cc2c-47d3-4e11-855f-79f43022ac0e_1_201_a_66cfb1b824af4bb591d4cbb180e64e93_large.jpg",
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
                    image: "https://product.hstatic.net/1000069225/product/d4d5cc2c-47d3-4e11-855f-79f43022ac0e_1_201_a_66cfb1b824af4bb591d4cbb180e64e93_large.jpg",
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
        {
            id: "7", 
            name: "Sản phẩm 7",
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
            id: "8", 
            name: "Sản phẩm 8",
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
                id: "9", 
                name: "Sản phẩm 9",
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
                id: "10", 
                name: "Sản phẩm 10",
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
                    id: "11", 
                    name: "Sản phẩm 11",
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
                        id: "12", 
                        name: "Sản phẩm 12",
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
        <section className="new_product_area">
            <div className="container bg-white">
                <HeaderContent mainContent={props.title}
                    // infoContent={props.description}
                    > 
                </HeaderContent>
                <div className="row">

                    <div className="col-lg-12 mt-5 mt-lg-0">
                        <div className="row">
                            {/* {props.data && props.data.length > 0 &&
                                props.data.map((item, index) => {
                                    return (
                                        <ItemProduct id={item.id} type="col-lg-3 col-md-3" name={item.name} img={item.productDetail[0].productImage[0].image}
                                            price={item.productDetail[0].originalPrice} discountPrice={item.productDetail[0].discountPrice}>
                                        </ItemProduct>
                                    )
                                })
                            } */}

                            {data && data.length > 0 &&
                                data.map((item, index) => {
                                    return (
                                        <ItemProduct id={item.id} width={"auto"} height={230} type="col-lg-2 col-md-4" name={item.name} img={item.productDetail[0].productImage[0].image}
                                            price={item.productDetail[0].originalPrice} discountPrice={item.productDetail[0].discountPrice}>
                                        </ItemProduct>
                                    )
                                })
                            }

                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default NewProductFeature;