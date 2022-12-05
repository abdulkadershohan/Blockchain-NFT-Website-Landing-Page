import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Home from "../components/home/Home";
// import Hero from "../components/hero/Hero";
import Navbar from "../components/navbar/Navbar";
import { CTypography } from "../utility";
import ScrollToTop from "./ScrollToTop";

export default function UserRoutes() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<CTypography
                    align={"center"}
                    fontSize={{
                        lg: 80,
                        md: 60,
                        sm: 30,
                        xs: 25
                    }}
                >
                    Path   Not Found back to <a href="/"
                        style={{
                            color: "blue",
                        }}
                    >Home</a>
                </CTypography>} />
            </Routes>
            <Footer />
            {/* <Routes>
                <Route
                    path="/"
                    element={
                        <DrawerAppBar />
                    }
                >
                    <Route path="/" element={<Hero />} />
                    <Route path="/a" element={<div>
                        <p
                            style={{
                                fontSize: '40px',
                                letterSpacing: '10px',
                                height: '1000vh'
                            }}
                        > Abdul
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem atque soluta dolore, sequi earum error? Quidem sequi aperiam itaque ducimus ratione similique delectus consequatur, nemo hic, exercitationem a perferendis excepturi reiciendis quas eveniet. Perferendis praesentium consectetur veritatis esse sint quibusdam, id ab cum ipsum illo ipsa, libero optio quidem molestias et fugiat. Non nesciunt facere autem eum, dolore, aut deleniti nulla asperiores at minima corporis ad magni inventore. Autem et, enim maxime asperiores recusandae maiores. Molestias ea necessitatibus nisi ipsum eaque quae asperiores consequatur ad facilis nemo? Consequuntur vero consectetur natus cum, magnam, quod illo maxime unde quo aliquid aperiam velit iusto nam modi minus deleniti optio sint voluptatum delectus, sapiente error magni! Reiciendis deleniti provident eligendi doloremque molestiae voluptatibus ducimus, eveniet aut error non optio ad accusamus consectetur quod quaerat quasi id neque! Earum accusamus velit vero dolor officia a incidunt eius possimus dignissimos officiis laudantium eum vel inventore tenetur sit accusantium, sunt perspiciatis autem optio? Quae reprehenderit rem quia officiis, ratione odit deleniti molestiae omnis soluta quibusdam, voluptas ipsum et nisi? Id nulla voluptatem fuga maiores, odit alias minima aliquam sequi quaerat vitae quod quisquam a quas sunt perspiciatis. Saepe, dolore ab. Laboriosam numquam rem officiis impedit maiores?
                        </p>
                    </div>} />

                    <Route path="*" element={<h1>Not Found</h1>} />
                </Route>

            </Routes> */}
        </BrowserRouter>
    );
}
