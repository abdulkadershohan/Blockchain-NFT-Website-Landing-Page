import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DrawerAppBar from "../components/drawerNew/NewDrawer";
import Hero from "../components/hero/Hero";
import ScrollToTop from "./ScrollToTop";

export default function UserRoutes() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route
                    path="/"
                    element={
                        <DrawerAppBar />
                    }
                >
                    <Route path="/" element={<Hero />} />

                    <Route path="*" element={<h1>Not Found</h1>} />
                </Route>

            </Routes>
        </BrowserRouter>
    );
}
