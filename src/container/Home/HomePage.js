import React, { useState, useEffect } from 'react';
import HomeBanner from "../../component/HomeFeature/HomeBanner";
import MainFeature from "../../component/HomeFeature/MainFeature";
import ProductFeature from "../../component/HomeFeature/ProductFeature";
import NewProductFeature from "../../component/HomeFeature/NewProductFeature"
import HomeBlog from '../../component/HomeFeature/HomeBlog';
import { getAllBanner, getProductFeatureService, getProductNewService, getNewBlog, getProductRecommendService } from '../../services/userService';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

const dataBannerr = [
    {image: "https://theme.hstatic.net/1000069225/1000590042/14/BannerMain.jpg?v=572", name: "1"},
    {image: "https://theme.hstatic.net/1000069225/1000590042/14/slideshow_1.png?v=572", name: "1"},
    {image: "https://theme.hstatic.net/1000069225/1000590042/14/BannerMain.jpg?v=572", name: "1"},
]

function HomePage(props) {
    const [dataProductFeature, setDataProductFeature] = useState([])
    const [dataNewProductFeature, setNewProductFeature] = useState([])
    const [dataNewBlog, setdataNewBlog] = useState([])
    const [dataBanner, setdataBanner] = useState([])
    const [dataProductRecommend, setdataProductRecommend] = useState([])
    let settings = {
        dots: false,
        Infinity: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 4000,
        autoplay: true,
        cssEase: "linear",
        arrows: false,
    }

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('userData'));
        if (userData) {
            fetchProductRecommend(userData.id)

        }
        fetchBlogFeature()
        // fetchDataBrand()
        // fetchProductFeature()
        fetchProductNew()

        window.scrollTo(0, 0);
    }, [])
    let fetchBlogFeature = async () => {
        let res = await getNewBlog(3)
        console.log(res.data)
        if (res && res.errCode === 0) {
            setdataNewBlog(res.data)
        }
    }
    let fetchProductFeature = async () => {
        let res = await getProductFeatureService(6)
        if (res && res.errCode === 0) {
            setDataProductFeature(res.data)
        }
    }
    let fetchProductRecommend = async (userId) => {
        let res = await getProductRecommendService({
            limit: 20,
            userId: userId
        })
        if (res && res.errCode === 0) {
            setdataProductRecommend(res.data)
        }
    }
    let fetchDataBrand = async () => {
        let res = await getAllBanner({
            limit: 6,
            offset: 0,
            keyword: ''
        })
        if (res && res.errCode === 0) {
            setdataBanner(res.data)
        }
    }
    let fetchProductNew = async () => {
        let res = await getProductNewService(8)
        console.log("Get sản phẩm: ", res);
        if (res && res.errCode === 0) {
            setNewProductFeature(res.data)
        }
    }

    return (
        <div>
            <section>
                <div className="container bg-white">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-4">
                        <h2 style={{color:"#b21212", fontWeight:900}}>"MATH SOLVER"</h2>
                        <h3 className="text-uppercase">GIẢI PHÁP THÔNG MINH</h3>
                        <p className="sub">
                            Chuyên cung cấp các giải pháp thông minh về tự động hóa, thiết kế trong lĩnh vực in 3D, đặc biệt là giải pháp về giáo dục STEM.
                        </p>
                        <Link className="main_btn mt-40" to={"/shop"}>Xem tất cả sản phẩm</Link>
                    </div>
                <div className="col-12 col-sm-12 col-md-8">
                    <Slider {...settings}>
                        {/* Thay đỡ chỗ này dataBanner --> dataBannerr, nữa đổi lại, Vinh */}
                        {dataBannerr && dataBannerr.length > 0 &&
                            dataBannerr.map((item, index) => {
                                return (
                                    <HomeBanner image={item.image} name={item.name}></HomeBanner>
                                )
                            })
                        }
                    </Slider>
                </div>
            </div>
                </div>
            </section>
            
            {/* <MainFeature></MainFeature> */}
            <ProductFeature title={"Gợi ý sản phẩm"} data={dataProductRecommend}></ProductFeature>
            {/* <ProductFeature title={"Sản phẩm đặc trưng"} data={dataProductFeature}></ProductFeature> */}
            <NewProductFeature title="Sản phẩm mới" description="Những sản phẩm mới, độc đáo về công nghệ" data={dataNewProductFeature}></NewProductFeature>
            <HomeBlog data={dataNewBlog} />
        </div>
    );
}

export default HomePage;