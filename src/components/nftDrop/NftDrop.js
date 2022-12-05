import { Stack } from "@mui/material";
import React from "react";
import { CTypography } from "../../utility";
import InputForm from "./InputForm";

export default function NftDrop() {
    return (
        <Stack
            px={10}
            py={{
                sm: 10,
                xs: 5
            }}

            pb={20}
            spacing={4}
            alignItems="center"
        >
            <CTypography
                fontWeight={700}
                fontFamily="Oxanium"
                align="center"
                color={'#F5FBF2'}
                fontSize={{
                    lg: 64,
                    md: 50,
                    xs: 45
                }}
            >
                Ready for Next NFT Drop?
            </CTypography>
            <InputForm />

        </Stack>
    );
}
