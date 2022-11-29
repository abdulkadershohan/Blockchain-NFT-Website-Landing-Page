import { Grid } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";
import discord from "../../assets/Icon/discord.svg";
import figma from "../../assets/Icon/figma.svg";
import github from "../../assets/Icon/github.svg";
import linkedin from "../../assets/Icon/linkedin.svg";
import telegram from "../../assets/Icon/telegram.svg";
import twitter from "../../assets/Icon/twitter.svg";
import logo from "../../assets/images/logo.png";
import { CTypography } from "../../utility";
const footerData = {
    socials: [
        {
            id: 1,
            name: 'github',
            link: "https://github.com/abdulkadershohan",
            img: github
        },
        {
            id: 2,
            name: 'linkedin',
            link: "https://www.linkedin.com/in/abdulkadershohan/",
            img: linkedin
        },
        {
            id: 3,
            name: 'telegram',
            link: "https://t.me/Abdulkadershohan",
            img: telegram
        },
        {
            id: 4,
            name: 'twitter',
            link: "https://twitter.com/dev_shohan",
            img: twitter
        },
        {
            id: 5,
            name: 'discord',
            link: "https://discord.com/users/522431317447802900",
            img: discord
        }
    ],
    socialsTitle: "Social Media",
    discription: `Frontend Engineer & React Native developer based in Bangladesh`,
    link: 'https://dev-shohan.netlify.app/',
    copyRight: 'Abdul Kader Shohan. All rights reserved.',
    logo: logo,
    logoTitle: 'Abdul Kader',
    refText: 'Special Thanks to Elias Dev for sharing this UI/UX design with Figma Community',

}

export default function Footer() {
    const { socials, socialsTitle, discription, link, copyRight, logo, logoTitle,
        refText } = footerData;
    return (
        <Stack
            sx={{
                borderTop: '1px solid #ABB2BF',
                py: 8,
            }}
        >
            <Grid container spacing={2}
            >
                <Grid item xs={12} md={6}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <Stack
                        spacing={4}
                    >
                        <Stack
                            direction="row"
                            spacing={6}
                        >
                            <Stack
                                direction="row"
                                alignItems="center"
                                spacing={1}
                                component="a"
                                href="/"
                                sx={{
                                    cursor: "pointer",
                                }}
                            >
                                <img src={logo} alt="logo"
                                    style={{ width: 15, height: 15 }}
                                />
                                <CTypography>
                                    {logoTitle}
                                </CTypography>
                            </Stack>
                            <CTypography
                                fontSize="16px"
                                fontWeight={400}
                                color="#ABB2BF"
                                component={"a"}
                                href="/"
                                target="_blank"
                            >
                                {link}
                            </CTypography>
                        </Stack>

                        <CTypography
                            fontSize="16px"
                            fontWeight={400}
                            align="center"
                        >
                            {discription}
                        </CTypography>
                        {/* <Stack>
                            {
                                refText && (
                                    <>
                                        <CTypography
                                            fontSize="12px"
                                            fontWeight={400}
                                            color="#ABB2BF"
                                        >
                                            {refText}
                                        </CTypography>
                                        <Box>
                                            <Box
                                                component={"a"}
                                                href={"https://www.figma.com/community/file/1164933568884615740"}
                                                target="_blank"
                                            >
                                                <img src={figma} alt="figma" />
                                            </Box>
                                        </Box>
                                    </>
                                )
                            }
                        </Stack> */}
                    </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Stack
                        alignItems="center"
                        justifyContent='center'
                    >
                        <CTypography>
                            {socialsTitle}
                        </CTypography>
                        <Stack
                            direction="row"
                            py={1}
                            gap={1}
                        >
                            {
                                socials.map((item, index) => {
                                    return (
                                        <Box
                                            component={"a"}
                                            href={item.link}
                                            target="_blank"
                                            key={Math.random()}
                                            sx={{
                                                '&:hover': {
                                                    transform: 'scale(1.1)',
                                                }
                                            }}
                                        >
                                            <Box
                                                component='img'
                                                src={item.img}
                                                alt="item.name"
                                            >

                                            </Box>

                                        </Box>
                                    )
                                })
                            }


                        </Stack>
                        <Stack
                            justifyContent='center'
                            alignItems='center'
                        >
                            {
                                refText && (
                                    <>
                                        <CTypography
                                            fontSize="12px"
                                            fontWeight={400}
                                            color="#ABB2BF"
                                        >
                                            {refText}
                                        </CTypography>
                                        <Box>
                                            <Box
                                                component={"a"}
                                                href={"https://www.figma.com/community/file/1164933568884615740"}
                                                target="_blank"
                                            >
                                                <img src={figma} alt="figma" />
                                            </Box>
                                        </Box>
                                    </>
                                )
                            }
                        </Stack>
                    </Stack>
                </Grid>
            </Grid>

            <Stack
                justifyContent="center"
                alignItems="center"
                py={6}
            >
                <CTypography
                    fontSize="12px"
                    fontWeight={400}
                    color="#ABB2BF"
                >
                    ©{' '}
                    {
                        new Date().getFullYear()
                    }
                    {' '}
                    {copyRight}
                </CTypography>
            </Stack>
        </Stack >
    )
}
