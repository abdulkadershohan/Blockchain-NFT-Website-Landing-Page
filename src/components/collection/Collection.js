import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { Box, Stack } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import collection2 from "../../assets/images/collection2.png";
import collection3 from "../../assets/images/collection3.png";
import collection4 from "../../assets/images/collection4.png";
import collection5 from "../../assets/images/collection5.png";
import collection6 from "../../assets/images/collection6.png";
import collection7 from "../../assets/images/collection7.png";
import { CTypography } from "../../utility";
import './collection.css';
const images = [collection2, collection3, collection4, collection5, collection6, collection7];
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

    const [imgIndex, setImgIndex] = React.useState(0)

    const settings = {
        infinite: true,
        lazyLoad: true,
        speed: 300,
        slidesToShow: 5,
        centerMode: true,
        centerPadding: 0,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1500,
        beforeChange: (current, next) => setImgIndex(next),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
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
    };


    return (
        <Stack
            py={10}
            spacing={4}
        >
            <CTypography
                fontSize={25}
                fontWeight={400}
                textAlign="center"
                fontFamily="Lato"
                sx={{
                    background: 'linear-gradient(90.13deg, #FFFFFF 0%, #F81DFB 99.96%);',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',

                }}
            >
                Explore our newly released NFT collection
            </CTypography>
            <CTypography
                fontSize={100}
                fontWeight={500}
                textAlign="center"
                color="white"
                fontFamily="Oxanium"
                textTransform="capitalize"
                mb={2}
            >
                Our collection
            </CTypography>
            <Slider {...settings}>
                {images.map((img, idx) => (

                    <Stack className={idx === imgIndex ? "slide activeSlide" : "slide"}>

                        <Box
                            component="img"
                            src={img} alt={idx}
                            sx={{
                                border: '2px solid #F81DFB',
                                borderRadius: '15px',
                                width: {
                                    xs: '90%',
                                    sm: '100%',
                                },

                            }}
                        />
                    </Stack>
                ))}
            </Slider>
        </Stack>
    );
}
