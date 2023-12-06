import React from 'react';
import HeaderContent from '../Content/HeaderContent';
import HomeBlogItem from './HomeBlogItem';
function HomeBlog(props) {

    const data =[
        {
            id: '1',
            image:"https://theme.hstatic.net/1000069225/1000590042/14/banner_sidebar_left_home.jpg?v=572",
            commentData:[{},{},{},{},],
            description:"Nhóm các cảm biến về sinh học và môi trường: đo nhịp tim ECG PPG, điện cơ EMG, đo chất lượng không khí, khí Gas, độ PH,....",
            title:"Dịch vụ cắt laser, in 3D 1",
            userData:{
                firstName:"Xuan Thi",
                lastName:"Truong",
                email:"mathsolver@gmail.com",
            },
        },
        {
            id: '2',
            image:"https://theme.hstatic.net/1000069225/1000590042/14/banner_sidebar_left_home.jpg?v=572",
            commentData:"commentData của bài viết 2",
            description:"Nhóm các cảm biến về sinh học và môi trường: đo nhịp tim ECG PPG, điện cơ EMG, đo chất lượng không khí, khí Gas, độ PH,....",
            title:"Dịch vụ cắt laser, in 3D 2",
            userData:{
                firstName:"Xuan Thi",
                lastName:"Truong",
                email:"mathsolver@gmail.com",
            },
        },
        {
            id: '3',
            image:"https://theme.hstatic.net/1000069225/1000590042/14/banner_sidebar_left_home.jpg?v=572",
            commentData:[{},{},{},{},],
            description:"Nhóm các cảm biến về sinh học và môi trường: đo nhịp tim ECG PPG, điện cơ EMG, đo chất lượng không khí, khí Gas, độ PH,....",
            title:"Dịch vụ cắt laser, in 3D 3",
            userData:{
                firstName:"Xuan Thi",
                lastName:"Truong",
                email:"mathsolver@gmail.com",
            },
        },
        {
            id: '4',
            image:"https://theme.hstatic.net/1000069225/1000590042/14/banner_sidebar_left_home.jpg?v=572",
            commentData:[{},{},{},{},],
            description:"Nhóm các cảm biến về sinh học và môi trường: đo nhịp tim ECG PPG, điện cơ EMG, đo chất lượng không khí, khí Gas, độ PH,....",
            title:"Dịch vụ cắt laser, in 3D 4",
            userData:{
                firstName:"Xuan Thi",
                lastName:"Truong",
                email:"mathsolver@gmail.com",
            },
        },
        {
            id: '5',
            image:"https://theme.hstatic.net/1000069225/1000590042/14/banner_sidebar_left_home.jpg?v=572",
            commentData:[{},{},{},{},],
            description:"Nhóm các cảm biến về sinh học và môi trường: đo nhịp tim ECG PPG, điện cơ EMG, đo chất lượng không khí, khí Gas, độ PH,....",
            title:"Dịch vụ cắt laser, in 3D 5",
            userData:{
                firstName:"Xuan Thi",
                lastName:"Truong",
                email:"mathsolver@gmail.com",
            },
        },
    ]

    // console.log(data);
    return (
        <section className="blog-area section-gap">
            <div className="container bg-white">
                <HeaderContent mainContent="Blog - sự kiện" 
                // infoContent="Những bài blog về công nghệ"
                ></HeaderContent>
                <div className="row">
                    {data && data.length > 0 &&
                        data.map((item,index) =>{
                            return(
                                <HomeBlogItem data={item}/>
                            )
                        })
                    }
                   

                   
                </div>
            </div>
        </section>

    );
}

export default HomeBlog;