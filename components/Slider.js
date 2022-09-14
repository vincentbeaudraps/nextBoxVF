import React, { useRef, useState , useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Styles from "../styles/Slider.module.css";
import { Pagination } from "swiper";




export default function App() {

    const [allMusics, setAllMusics] = useState([])
    const fetchAllMusics = async () => {
        const res = await fetch('api/music');
        const musics = await res.json();
        setAllMusics(musics);
        console.log(allMusics);
    }
    useEffect(() => {
        fetchAllMusics()
    }, [])

    return (
        <Swiper
            spaceBetween={30}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className={Styles.mySwiper}
        >
            {allMusics.map((music) => (
                <SwiperSlide className={Styles.swiperSlides} key={music.id}>{music.title}</SwiperSlide>

            ))}
        </Swiper>);
};




