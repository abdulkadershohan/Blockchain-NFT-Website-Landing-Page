import { Stack } from "@mui/system";
import React from "react";
import Collection from "../collection/Collection";
import Hero from "../hero/Hero";
import HowItWorks from "../howItWorks/HowItWorks";
import TendingNFts from "../tendingNFts/TendingNFts";
import WalletSupport from "../walletSupport/WalletSupport";

export default function Home() {
    return (
        <Stack
            gap={10}
        >
            <Hero />
            <WalletSupport />
            <HowItWorks />
            <Collection />
            <TendingNFts />
        </Stack>
    );
}
