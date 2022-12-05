import { Stack } from "@mui/material";
import React from "react";
import { CTypography } from "../../utility";
import InputForm from "./InputForm";

export default function NftDrop() {
    return (
        <Stack
            px={10}
            py={10}
            pb={20}
            spacing={4}
            alignItems="center"
        >
            <CTypography
                fontSize={64}
                fontWeight={700}
                fontFamily="Oxanium"
                align="center"
                color={'#F5FBF2'}
            >
                Ready for Next NFT Drop?
            </CTypography>
            <InputForm />

        </Stack>
    );
}
