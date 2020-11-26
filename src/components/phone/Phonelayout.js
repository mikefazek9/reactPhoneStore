import React from 'react'
import AddCircleIcon from '@material-ui/icons/AddCircleOutline';
import iphonexr from '../../img/iphonexr.jpg';
import samsungNote1 from "../../img/samsungnote.jpg";
import googlepixel from "../../img/googlepixel.jpg";
import infoProduct from "../../Data";
function Phonelayout() {
    return (
        <div className="phone_layout_container">
            <div className="best_seller_items">
             <img src={iphonexr} alt="iphone xr" className="best_seller_images"/>
                 <h2 className="best-h2">{infoProduct.iphoneXR.name}</h2>
                     <p>Price: ${infoProduct.iphoneXR.price}</p>
                 <p>{infoProduct.iphoneXR.desc}</p>
                 <AddCircleIcon/>
            </div>
           
            <div className="best_seller_items">
                <img src={samsungNote1} alt="samsung note" className="best_seller_images"/>
                    <h2 className="best-h2">{infoProduct.samsung.name}</h2>
                <p>Price: ${infoProduct.samsung.price}</p>
            <p>{infoProduct.samsung.desc}</p>
            <AddCircleIcon/>
            </div>
           
            <div className="best_seller_items">
                 <img src={googlepixel} alt="google pixel 4" className="best_seller_images"/>
                    <h2 className="best-h2">{infoProduct.google.name}</h2>
                <p>Price: ${infoProduct.google.price}</p>
            <p>{infoProduct.google.desc}</p>
            <AddCircleIcon/>
            </div>
        </div>
    )
}

export default Phonelayout
