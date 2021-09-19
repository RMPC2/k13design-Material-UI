import React from 'react';
import './gallery.css';

import Img1 from './img/img1.jpeg';
import Img2 from './img/img2.jpeg';
import Img3 from './img/img3.jpeg';
import Img4 from './img/img4.jpeg';
import Img5 from './img/img5.jpeg';
import Img6 from './img/img6.jpeg';
import Img7 from './img/img7.jpeg';
import Img8 from './img/img8.jpeg';
import Img9 from './img/img9.jpeg';
import Img10 from './img/img10.jpeg';
import Img11 from './img/img11.jpeg';
import Img12 from './img/img12.jpeg';
import Img13 from './img/img13.jpeg';
import Img14 from './img/img14.jpeg';

const Gallery = () => {
    let data =[
        {
            id: 1,
            imgSrc: Img1,
        },
        {
            id: 2,
            imgSrc: Img2,
        },
        {
            id: 3,
            imgSrc: Img3,
        },
        {
            id: 4,
            imgSrc: Img4,
        },
        {
            id: 5,
            imgSrc: Img5,
        },
        {
            id: 6,
            imgSrc: Img6,
        },
        {
            id: 7,
            imgSrc: Img7,
        },
        {
            id: 8,
            imgSrc: Img8,
        },
        {
            id: 9,
            imgSrc: Img9,
        },
        {
            id: 10,
            imgSrc: Img10,
        },
        {
            id: 11,
            imgSrc: Img11,
        },
        {
            id: 12,
            imgSrc: Img12,
        },
        {
            id: 13,
            imgSrc: Img13,
        },
        {
            id: 14,
            imgSrc: Img14,
        },
    ]

    return (
        <>

        <div className="gallery">
            {data.map((item, index)=>{
                return(
                    <div className="pics" key={index}>
                        <img src={item.imgSrc} style={{width: '100%'}} />
                    </div>
                )
            })}
        </div>

        </>
    )
}

export default Gallery