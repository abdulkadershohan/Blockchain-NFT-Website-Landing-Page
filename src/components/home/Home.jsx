import { Stack } from "@mui/system";
import React from "react";
import AuctionNFTs from "../auctionNFTs/AuctionNFTs";
import Collection from "../collection/Collection";
import Hero from "../hero/Hero";
import HowItWorks from "../howItWorks/HowItWorks";
import Influencers from "../influencers/Influencers";
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
            <AuctionNFTs />
            <Influencers />
        </Stack>
    );
}
