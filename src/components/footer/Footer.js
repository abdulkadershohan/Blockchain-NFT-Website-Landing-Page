import { Box, Grid } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import FbIcon from "../../assets/svg/FbIcon";
import GoogleIcon from "../../assets/svg/GoogleIcon";
import TwitterIcon from "../../assets/svg/TwitterIcon";
import YoutubeIcon from "../../assets/svg/YoutubeIcon";
import { CTypography } from "../../utility";

const footerData = {
    logo: logo,
    description: 'Shihami is the world’s leading NFTs marketplace where you can discover, sell and bid NFTs and get rich ',
    socialLinks: [
        {
            id: 1,
            name: 'youtube',
            icon: <YoutubeIcon />,
        },
        {
            id: 2,
            name: 'twitter',
            icon: <TwitterIcon />,
        },
        {
            id: 3,
            name: 'facebook',
            icon: <FbIcon />,
        },
        {
            id: 4,
            name: 'google plus',
            icon: <GoogleIcon />,
        }
    ],
    copyRight: 'Shihami. All rights reserved.',
    aboutLinks: [
        {
            id: 1,
            name: 'About NFT',
            link: '/about-nft',
        },
        {
            id: 2,
            name: 'Live Auctions',
            link: '/live-auctions',
        },
        {
            id: 3,
            name: 'NFT Blog',
            link: '/nft-blog',
        },
        {
            id: 4,
            name: 'Activity',
            link: '/activity',

        }
    ],
    supportLinks: [
        {
            id: 1,
            name: 'Help & Support',
            link: '/help-support',
        },
        {
            id: 2,
            name: 'Item Details',
            link: '/item-details',
        },
        {
            id: 3,
            name: 'Author Profile',
            link: '/author-profile',
        },
        {
            id: 4,
            name: 'Collection',
            link: '/collection',
        }
    ]
}
export default function Footer() {
    const { logo, description, socialLinks, copyRight, aboutLinks, supportLinks } = footerData;
    const LogoSection = () => {
        return (
            <Stack
                direction="row"
                alignItems="center"
                spacing={1}
                sx={{
                    cursor: "pointer",
                }}
                component={'a'}
                href={'#'}
                justifyContent="center"

            >
                <img src={logo} alt="logo"
                    style={{
                        width: 80,
                        height: 80
                    }}
                />
                <CTypography
                    fontSize="50px"
                    fontWeight="700"
                    textTransform="uppercase"

                >
                    hihami
                </CTypography>
            </Stack>
        )
    }
    const ContentSection = () => {
        return (
            <Stack>
                <Grid container spacing={6}>
                    <Grid item xs={12} sm={6} >
                        <Stack
                            gap={4}
                        >
                            <Box
                                width={{
                                    xs: "100%",
                                    lg: "75%",
                                }}
                            >
                                <CTypography
                                    color={'#96839B'}
                                    fontSize="18px"
                                    fontWeight="500"
                                    fontFamily="sans-serif"

                                >
                                    {description}
                                </CTypography>
                            </Box>
                            <Stack
                                direction="row"
                                spacing={4}
                            >
                                {
                                    socialLinks.map((item) => (
                                        <Stack
                                            sx={{
                                                '&:hover': {
                                                    color: '#fff',
                                                    cursor: 'pointer',
                                                    transform: 'scale(1.1)',
                                                },
                                            }}
                                        >
                                            {item.icon}
                                        </Stack>
                                    ))
                                }

                            </Stack>
                            <CTypography
                                fontSize="14px"
                                fontWeight="400"
                                color="#96839B"
                                py={2}
                                fontFamily="sans-serif"
                                display={{
                                    xs: "none",
                                    sm: "block",
                                }}
                            >
                                © {new Date().getFullYear()} {copyRight}
                            </CTypography>
                        </Stack>
                    </Grid>
                    <Grid item xs={6} sm={3} >
                        <Stack
                            spacing={2}
                        >
                            <CTypography
                                fontWeight="700"
                                fontSize="24px"
                                color={'#F5FBF2'}
                            >
                                About
                            </CTypography>
                            <Stack spacing={2}>
                                {
                                    aboutLinks.map((item) => (
                                        <CTypography
                                            key={Math.random()}
                                            fontSize="14px"
                                            fontWeight="400"
                                            fontFamily="sans-serif"
                                            color={'#96839B'}
                                            component={Link}
                                            to={item.link}
                                            sx={{
                                                '&:hover': {
                                                    color: '#fff'
                                                }
                                            }}
                                        >
                                            {item.name}
                                        </CTypography>
                                    ))
                                }
                            </Stack>
                        </Stack>
                    </Grid>
                    <Grid item xs={6} sm={3} >
                        <Stack
                            spacing={2}
                        >
                            <CTypography
                                fontWeight="700"
                                fontSize="24px"
                                color={'#F5FBF2'}
                            >
                                Support
                            </CTypography>
                            <Stack spacing={2}>
                                {
                                    supportLinks.map((item) => (
                                        <CTypography
                                            key={Math.random()}
                                            fontSize="14px"
                                            fontWeight="400"
                                            fontFamily="sans-serif"
                                            color={'#96839B'}
                                            component={Link}
                                            to={item.link}
                                            sx={{
                                                '&:hover': {
                                                    color: '#fff'
                                                }
                                            }}
                                        >
                                            {item.name}
                                        </CTypography>
                                    ))
                                }
                            </Stack>
                        </Stack>
                    </Grid>

                </Grid>
            </Stack >
        )
    }
    return (
        <Stack
            px={10}
            py={12}
            spacing={4}
            sx={{
                background: 'linear-gradient(147.75deg, rgba(255, 255, 255, 0.01) 0%, rgba(255, 255, 255, 0.005) 100%)',
                backdropFilter: 'blur(20px)',
            }}
        >
            <Grid container spacing={6}>
                <Grid item xs={12} md={4}
                >
                    <LogoSection />
                </Grid>
                <Grid item xs={12} md={8}>
                    <ContentSection />
                </Grid>
            </Grid>
            <CTypography
                fontSize="14px"
                fontWeight="400"
                color="#96839B"
                py={2}
                fontFamily="sans-serif"
                align={'center'}
                display={{
                    xs: "block",
                    sm: "none",
                }}
            >
                © {new Date().getFullYear()} {copyRight}
            </CTypography>
        </Stack>
    )
}
