import React, { useState, useEffect } from 'react';
import { useFetchAllcode } from '../../container/customize/fetch';
import { getAllCodeService } from '../../services/userService';
function Category(props) {


    const [arrCategory, setarrCategory] = useState([])
    const [activeLinkId, setactiveLinkId] = useState('')

    useEffect(() => {
        let fetchCategory = async () => {
            // let arrData = await getAllCodeService('CATEGORY')
            let arrData = await getAllCodeService()
            console.log("Get category: ", arrData);
            if (arrData && arrData.status === 200) {
                arrData.data.unshift({
                    // createdAt: null,
                    categoryId: 'ALL',
                    parent: null,
                    image: null,
                    name: "Tất cả",
                })
                setarrCategory(arrData.data)
            }
        }
        fetchCategory()
    }, [])
    let handleClickCategory = (code) => {
        props.handleRecevieDataCategory(code)
        setactiveLinkId(code)
    }

    return (

        <aside className="left_widgets p_filter_widgets">
            <div className="l_w_title">
                <h3>Các danh mục</h3>
            </div>
            <div className="widgets_inner">
                <ul className="list">

                    {arrCategory && arrCategory.length > 0 &&
                        arrCategory.map((item, index) => {
                            return (
                                // Vinh categories hiển thị
                                // <li className={item.code === activeLinkId ? 'active' : ''} style={{ cursor: 'pointer' }} onClick={() => handleClickCategory(item.code)} key={index}>
                                //     <a>{item.value}</a>
                                // </li>

                                <li className={item.categoryId === activeLinkId ? 'active' : ''} style={{ cursor: 'pointer' }} onClick={() => handleClickCategory(item.categoryId)} key={index}>
                                <a>{item.name}</a>
                                </li>
                            )
                        })
                    }


                </ul>
            </div>
        </aside>

    );
}

export default Category;