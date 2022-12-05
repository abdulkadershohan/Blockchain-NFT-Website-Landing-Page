import { Avatar, Box } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import EthIcon from "../../assets/svg/EthIcon";
import FireIcon from "../../assets/svg/FireIcon";
import ReactIcon from "../../assets/svg/ReactIcon";
import { CCard, CTypography, OutlinedBtn } from "../../utility";
const auctionNFTsData = [
    {
        id: 1,
        img: require('../../assets/images/trending4.png'),
        react: '341',
        avatar: require('../../assets/images/UserProfile.png'),
        name: 'Racer-To-Go ',
        userName: 'racertogo',
        eth: '4.89',
        busd: '654,874.86'
    },
    {
        id: 2,
        img: require('../../assets/images/trending3.png'),
        react: '341',
        avatar: require('../../assets/images/UserProfile.png'),
        name: 'Wired Human ',
        userName: 'wiredhuman',
        eth: '4.89',
        busd: '654,874.86'
    },
    {
        id: 3,
        img: require('../../assets/images/trending2.png'),
        react: '341',
        avatar: require('../../assets/images/UserProfile.png'),
        name: 'Moonfall',
        userName: 'moonfall',
        eth: '4.89',
        busd: '654,874.86'
    },
    {
        id: 4,
        img: require('../../assets/images/trending1.png'),
        react: '341',
        avatar: require('../../assets/images/UserProfile.png'),
        name: 'Monkey Ape',
        userName: 'monkeyape',
        eth: '4.89',
        busd: '654,874.86'
    },
    {
        id: 5,
        img: require('../../assets/images/trending4.png'),
        react: '341',
        avatar: require('../../assets/images/UserProfile.png'),
        name: 'Racer-To-Go ',
        userName: 'racertogo',
        eth: '4.89',
        busd: '654,874.86'
    },
    {
        id: 6,
        img: require('../../assets/images/trending3.png'),
        react: '341',
        avatar: require('../../assets/images/UserProfile.png'),
        name: 'Wired Human ',
        userName: 'wiredhuman',
        eth: '4.89',
        busd: '654,874.86'
    },
    {
        id: 7,
        img: require('../../assets/images/trending2.png'),
        react: '341',
        avatar: require('../../assets/images/UserProfile.png'),
        name: 'Moonfall',
        userName: 'moonfall',
        eth: '4.89',
        busd: '654,874.86'
    },
    {
        id: 8,
        img: require('../../assets/images/trending1.png'),
        react: '341',
        avatar: require('../../assets/images/UserProfile.png'),
        name: 'Monkey Ape',
        userName: 'monkeyape',
        eth: '4.89',
        busd: '654,874.86'
    },

]

export default function AuctionNFTs() {
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
                    Most Appreciated NFTs On Sale For the day
                </CTypography>
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    my={2}
                >
                    <CTypography
                        fontWeight={600}
                        fontFamily="Oxanium"
                        fontSize={{
                            md: 70,
                            sm: 30,
                            xs: 25
                        }}
                    >
                        Live Auction nFTs
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
                gap={2}
                flexWrap="wrap"
                alignItems="center"
                justifyContent="center"
                rowGap={4}
            >
                {
                    auctionNFTsData.map((item, index) => (
                        <CCard
                            key={index}
                            background={"linear-gradient(147.75deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);"}
                            backdropFilter={"blur(10px)"}
                            borderRadius={'15px'}
                            p={1}
                            noHover
                            borderWidth={'0px'}
                        >
                            <Box
                                sx={{
                                    position: 'relative',
                                }}
                            >
                                <Box
                                    component="img"
                                    src={item.img}
                                    alt={`${item.name} image`}
                                    sx={{
                                        width: 310,
                                        height: 200,
                                        borderRadius: '15px',
                                    }}
                                />
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        zIndex: 1,
                                        top: 0,
                                        right: 0,
                                    }}
                                >
                                    <Stack
                                        direction="row"
                                        sx={{
                                            background: 'linear-gradient(147.75deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);',
                                            backdropFilter: 'blur(10px)',
                                            borderRadius: '0px 15px',
                                            width: 'fit-content',
                                            p: 1.2,
                                            gap: 1,
                                            cursor: 'pointer',
                                        }}
                                    >
                                        <ReactIcon />
                                        {item.react}
                                    </Stack>
                                </Box>
                            </Box>
                            <Stack
                                px={2}
                            >
                                <Stack
                                    py={2}
                                >
                                    <Stack
                                        direction="row"
                                        spacing={2}
                                    >
                                        <Avatar
                                            alt={item.avatar}
                                            src={item.avatar}
                                        />
                                        <Stack>
                                            <CTypography
                                                fontSize={18}
                                                fontWeight={400}
                                                fontFamily="Oxanium"
                                                textTransform="capitalize"
                                            >
                                                {item.name}
                                            </CTypography>
                                            <CTypography
                                                fontSize={14}
                                                fontWeight={200}
                                                fontFamily="cursive"
                                                textTransform="lowercase"
                                            >
                                                @{item.userName}
                                            </CTypography>
                                        </Stack>


                                    </Stack>
                                </Stack>
                                <Stack
                                    justifyContent="space-between"
                                    direction="row"
                                    py={2}
                                >
                                    <Stack
                                        direction="row"
                                        spacing={1}
                                    >
                                        <CTypography
                                            fontSize={14}
                                            fontWeight={200}
                                            fontFamily="Oxanium"
                                        >
                                            On Sale
                                        </CTypography>
                                        <FireIcon />
                                    </Stack>
                                    <Stack>
                                        <Stack
                                            direction="row"
                                            spacing={1}
                                        >
                                            <EthIcon />
                                            <CTypography
                                                fontSize={14}
                                                fontFamily="Oxanium"
                                                fontWeight={400}
                                            >
                                                {item.eth} ETH
                                            </CTypography>

                                        </Stack>
                                        <CTypography
                                            fontSize={12}
                                            fontFamily="Oxanium"
                                            fontWeight={400}
                                        >
                                            ($ {item.busd})
                                        </CTypography>
                                    </Stack>

                                </Stack>
                                <OutlinedBtn
                                    fullWidth
                                    btnTitle={'buy now'}
                                    btnHeight="45px"
                                />

                            </Stack>
                        </CCard>
                    ))
                }
            </Stack >
        )
    }
    return (
        <Stack
            px={{
                md: 10,
                sm: 5,
                xs: 2
            }}
            py={{
                sm: 10,
                xs: 0
            }}
            spacing={8}
        >
            <TopSection />
            <CardSection />
        </Stack>
    );
}
