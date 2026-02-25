import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from './Card';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios'
const Freebook = () => {

    const [book, setBook] = useState([])
    useEffect(() => {

        const getBook = async () => {

            try {
                const res = await axios.get('http://localhost:4001/book')
                setBook(res.data)
            }
            catch(error){
                console.log(error)
            }
        }
        getBook()
    }, [])
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }
    const filter_data = book.filter((data) => data.category === "free")
    console.log(filter_data)
    return (
        <div className='w-full p-10'>
            <div >
                <div className='px-4'>
                    <h1 className='font-bold text-2xl'>Free offered courses</h1>
                    <p className='font-semibold my-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi illum consectetur facere ex officiis impedit eos cum explicabo atque. Incidunt.</p>
                </div>
                <div>
                    <Slider {...settings}>

                        {filter_data.map((item) => {
                            return <Card item={item} key={item.id} />
                        })}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Freebook