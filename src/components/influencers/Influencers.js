import { Avatar } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";
import VarifiedIcon from "../../assets/svg/VarifiedIcon";
import { CCard, CTypography, OutlinedBtn } from "../../utility";

const influencersData = [
    {
        id: 1,
        name: "John Doe",
        userName: "johndoe",
        image1: require("../../assets/images/InfluencersmMain1.png"),
        image2: require("../../assets/images/InfluencersmImg1.png"),
        avatar: require("../../assets/images/InfluencersAvatar1.png"),
        isVerified: true,
    },
    {
        id: 2,
        name: "John Norris",
        userName: "johnnorris",
        image1: require("../../assets/images/InfluencersmMain2.png"),
        image2: require("../../assets/images/InfluencersmImg2.png"),
        avatar: require("../../assets/images/InfluencersAvatar2.png"),
        isVerified: false,
    },
    {
        id: 3,
        name: "John Smith",
        userName: "johnsmith",
        image1: require("../../assets/images/InfluencersmMain3.png"),
        image2: require("../../assets/images/InfluencersmImg3.png"),
        avatar: require("../../assets/images/InfluencersAvatar3.png"),
        isVerified: true,
    },
    {
        id: 4,
        name: "Cripto Punks",
        userName: "criptopunks",
        image1: require("../../assets/images/InfluencersmMain4.png"),
        image2: require("../../assets/images/InfluencersmImg4.png"),
        avatar: require("../../assets/images/InfluencersAvatar4.png"),
        isVerified: false,
    },
    {
        id: 5,
        name: "John Doe",
        userName: "johndoe",
        image1: require("../../assets/images/InfluencersmMain1.png"),
        image2: require("../../assets/images/InfluencersmImg1.png"),
        avatar: require("../../assets/images/InfluencersAvatar1.png"),
        isVerified: true,
    },
    {
        id: 6,
        name: "John Norris",
        userName: "johnnorris",
        image1: require("../../assets/images/InfluencersmMain2.png"),
        image2: require("../../assets/images/InfluencersmImg2.png"),
        avatar: require("../../assets/images/InfluencersAvatar2.png"),
        isVerified: false,
    },
    {
        id: 7,
        name: "John Smith",
        userName: "johnsmith",
        image1: require("../../assets/images/InfluencersmMain3.png"),
        image2: require("../../assets/images/InfluencersmImg3.png"),
        avatar: require("../../assets/images/InfluencersAvatar3.png"),
        isVerified: true,
    },
    {
        id: 8,
        name: "Cripto Punks",
        userName: "criptopunks",
        image1: require("../../assets/images/InfluencersmMain4.png"),
        image2: require("../../assets/images/InfluencersmImg4.png"),
        avatar: require("../../assets/images/InfluencersAvatar4.png"),
        isVerified: false,
    }
]
export default function Influencers() {
    const TopSection = (props) => {
        return (
            <Stack
                spacing={4}
            >
                <CTypography
                    fontSize={18}
                    fontWeight={100}
                    fontFamily="cursive"
                    textTransform="capitalize"

                >
                    Watch and follow celebrities to get the best collection of NFTs
                </CTypography>
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    my={2}
                >
                    <CTypography
                        fontSize={70}
                        fontWeight={600}
                        fontFamily="Oxanium"
                        textTransform="capitalize"
                    >
                        joined influencers
                    </CTypography>
                    <OutlinedBtn
                        btnTitle={'view all'}
                        // btnPadding={'0px 40px'}
                        btnHeight="35px"
                    />
                </Stack>
            </Stack>
        )
    }
    const CardSection = () => {
        return (
            <Stack
                direction="row"
                gap={3}
                flexWrap="wrap"
                alignItems="center"
                justifyContent="center"
            >
                {
                    influencersData.map((item, index) => (
                        <CCard
                            key={index}
                            background='linear-gradient(147.75deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);'
                            backdropFilter={"blur(10px)"}
                            borderRadius={'15px'}
                            p={2}
                            pt={3}
                            borderWidth={'0px'}
                            noHover
                        >
                            <Stack
                                gap={6}
                            >
                                <Stack
                                    direction="row"
                                    justifyContent="space-between"
                                    spacing={1.5}
                                >
                                    <Stack
                                        sx={{
                                            position: 'relative',
                                        }}
                                    >
                                        <Box
                                            component={'img'}
                                            src={item.image1}
                                            width={155}
                                            height={160}
                                            borderRadius={'15px'}

                                        />
                                        <Avatar
                                            src={item.avatar}
                                            size={'large'}
                                            sx={{
                                                position: 'absolute',
                                                bottom: -70,
                                                right: '50%',
                                                transform: 'translate(50%, -50%)',
                                                //border: '4px solid #000000',
                                                width: 80,
                                                height: 80,
                                            }}

                                        />
                                    </Stack>
                                    <Box
                                        component={'img'}
                                        src={item.image2}
                                        width={125}
                                        height={160}
                                        borderRadius={'15px'}

                                    />


                                </Stack>
                                <Stack
                                    direction="row"
                                    justifyContent="space-between"
                                >
                                    <Stack>
                                        <Stack
                                            direction="row"
                                            alignItems="center"
                                            spacing={1}
                                        >
                                            <CTypography
                                                fontSize={18}
                                                fontWeight={500}
                                                fontFamily="Oxanium"
                                                textTransform="capitalize"
                                            >
                                                {item.name}
                                            </CTypography>
                                            <VarifiedIcon />
                                        </Stack>
                                        <CTypography
                                            fontSize={16}
                                            fontWeight={200}
                                            fontFamily="cursive"
                                            textTransform="capitalize"
                                            color='#CBCBCB'
                                        >
                                            @{item.userName}
                                        </CTypography>
                                    </Stack>
                                    <OutlinedBtn
                                        noBar
                                        btnBackground={'rgba(248, 29, 251, 0.05);'}
                                        btnBorder='1px solid #F81DFB'
                                        btnBorderRadius={'42px'}
                                        btnHeight={'40px'}

                                    >
                                        Follow
                                    </OutlinedBtn>
                                </Stack>
                            </Stack>

                        </CCard>
                    ))
                }
            </Stack>
        )
    }
    return (
        <Stack
            px={10}
            py={10}
            spacing={8}
        >
            <TopSection />
            <CardSection />
        </Stack>
    );
}
