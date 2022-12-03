import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { Slider } from "@mui/material";
import React from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import collection1 from "../../assets/images/collection1.png";
import collection2 from "../../assets/images/collection2.png";
import collection3 from "../../assets/images/collection3.png";
import collection4 from "../../assets/images/collection4.png";
import collection5 from "../../assets/images/collection5.png";
import collection6 from "../../assets/images/collection6.png";
import collection7 from "../../assets/images/collection7.png";
import styles from "./collection.module.css";
const images = [collection1, collection2, collection3, collection4, collection5, collection6, collection7];
export default function Collection() {
    const NextArrow = ({ onClick }) => {
        return (
            <div className="arrow next" onClick={onClick}>
                <ArrowRightIcon />
            </div>
        );
    };

    const PrevArrow = ({ onClick }) => {
        return (
            <div className="arrow prev" onClick={onClick}>
                <ArrowLeftIcon />
            </div>
        );
    };

    const [imageIndex, setImageIndex] = React.useState(0);

    const settings = {
        infinite: true,
        lazyLoad: true,
        speed: 300,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => setImageIndex(next),
    };

    return (
        <div className={styles.App}>
            <Slider {...settings}>
                {images.map((img, idx) => (
                    <div className={idx === imageIndex ? `${styles.slide} ${styles.activeSlide}` : `${styles.slide}`}>
                        <img src={img} alt={img} />
                    </div>
                ))}
            </Slider>
        </div>
    );
}
