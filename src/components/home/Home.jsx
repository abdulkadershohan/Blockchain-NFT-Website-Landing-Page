import { Stack } from "@mui/system";
import React from "react";
import Hero from "../hero/Hero";
import WalletSupport from "../walletSupport/WalletSupport";

export default function Home() {
    return (
        <Stack>
            <Hero />
            <WalletSupport />
        </Stack>
    );
}
