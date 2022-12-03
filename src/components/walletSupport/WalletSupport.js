import { Avatar } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { CCard, CTypography } from "../../utility";
const logo = [
    {
        id: 1,
        src: require("../../assets/images/walletSupport1.png"),
        name: 'Metamask',
    },
    {
        id: 2,
        src: require("../../assets/images/walletSupport2.png"),
        name: 'Binance',
    },
    {
        id: 3,
        src: require("../../assets/images/walletSupport3.png"),
        name: 'Trust Wallet',

    },
    {
        id: 4,
        src: require("../../assets/images/walletSupport4.png"),
        name: 'Alpha',
    },
    {
        id: 5,
        src: require("../../assets/images/walletSupport5.png"),
        name: 'Coingecko',
    }
]

export default function walletSupport() {
    return (
        <Stack spacing={4}
            py={10}
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
                Trade with world’s most trusted and fastest wallets
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
                wallets we support
            </CTypography>
            <Stack
                direction="row"
                flexWrap="wrap"
                justifyContent="center"
                gap={4}
            >
                {
                    logo.map((item) => (
                        <CCard
                            key={item.id}
                            p={3}
                            background={'linear-gradient(147.75deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);'}
                            backdropFilter="blur(18px)"
                            borderRadius='15px'
                            borderWidth='0px'
                            noHover
                        >
                            <CCard
                                background={'linear-gradient(147.75deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);'}
                                backdropFilter="blur(10px)"
                                borderRadius={50}
                                p={4}
                                borderWidth='0px'

                            >
                                <Avatar
                                    src={item.src}
                                    alt={item.name}
                                    sx={{
                                        width: 100,
                                        height: 100,
                                    }}
                                />

                            </CCard>
                            <CTypography
                                fontSize={20}
                                fontWeight={500}
                                textAlign="center"
                                color="white"
                                fontFamily="Oxanium"
                                pt={2}
                            >
                                {item.name}
                            </CTypography>
                        </CCard>
                    ))

                }

            </Stack >
        </Stack >
    );
}
