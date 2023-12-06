import React from 'react';
import './HeaderContent.css'

function HeaderContent(props) {
    return (
        <div className="row justify-content-center" >
            <div className="col-lg-12">
                <div className="main_title spnoi">
                    <h2><span>{props.mainContent}</span></h2>
                    <p>{props.infoContent}</p>
                </div>
            </div>
        </div>
    );
}

export default HeaderContent;