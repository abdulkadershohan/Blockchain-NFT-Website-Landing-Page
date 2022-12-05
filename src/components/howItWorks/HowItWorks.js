import { Box } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import AddIcon from "../../assets/svg/AddIcon";
import CollectionIcon from "../../assets/svg/CollectionIcon";
import SealsIcon from "../../assets/svg/SealsIcon";
import WalletIcon from "../../assets/svg/WalletIcon";
import { CCard, CTypography } from "../../utility/";

const icons = [
    {
        id: 1,
        icon: <WalletIcon />,
        name: 'Set up your wallet',
        dontLine: require('../../assets/images/dotLine1.png'),
    },
    {
        id: 2,
        icon: <CollectionIcon />,
        name: 'Create your collection',
        dontLine: require('../../assets/images/dotLine2.png'),
    },
    {
        id: 3,
        icon: <AddIcon />,
        name: 'Add your NFTs',
        dontLine: require('../../assets/images/dotLine3.png'),
    },
    {
        id: 4,
        icon: <SealsIcon />,
        name: 'List them for sale',
    }
]
export default function HowItWorks() {
    return (
        <Stack
            gap={4}
            py={{
                sm: 10,
                xs: 0
            }}
        >
            <CTypography
                fontWeight={500}
                textAlign="center"
                fontFamily="Oxanium"
                fontSize={{
                    lg: 64,
                    md: 50,
                    xs: 45
                }}
            >
                How it works
            </CTypography>
            <Stack
                direction="row"
                gap={2}
                justifyContent="center"
                alignItems="center"
                flexWrap="wrap"
            >
                {
                    icons.map((icon) => (
                        <Stack
                            key={icon.id}
                            alignItems="center"
                            gap={2}
                            direction="row"
                        >
                            <Stack
                                alignItems="center"
                                gap={2}
                            >
                                <CCard
                                    borderWidth={'0'}
                                    p={3}
                                    borderRadius={50}
                                >
                                    {icon.icon}
                                </CCard>
                                <CTypography
                                    fontSize={18}
                                    fontWeight={600}
                                    textAlign="center"
                                >
                                    {icon.name}
                                </CTypography>
                            </Stack>
                            <Box
                                component="img"
                                src={icon?.dontLine}
                                display={{
                                    xs: 'none',
                                    lg: 'block'
                                }}

                            />
                        </Stack>
                    ))
                }

            </Stack>
        </Stack>
    );
}
