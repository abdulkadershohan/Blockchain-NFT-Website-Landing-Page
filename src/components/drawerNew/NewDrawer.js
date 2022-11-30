import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, Drawer } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import { Stack } from '@mui/system';
import * as React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import logo from "../../assets/images/logo.png";
import UserProfile from "../../assets/images/UserProfile.png";
import { CButton, CTypography } from '../../utility';

const drawerWidth = '70%';
const navbarData = {
    routes: [
        {
            id: 1,
            name: "EXPLORE",
            path: "/explore",
        }, {
            id: 2,
            name: "TRENDING NFTs",
            path: "/trending-nfts",
        },
        {
            id: 3,
            name: "AUCTIONED NFTs",
            path: "/auctioned-nfts",
        },
        {
            id: 4,
            name: "INFLUENCERS",
            path: "/influencers",
        },

    ],
    logo: logo,
    logoTitle: "Abdul Kader",
}

function DrawerAppBar(props, { children }) {
    const { routes, logo, logoTitle } = navbarData
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box sx={{
            textAlign: 'center',
        }}>
            {/* logo section for nav menu */}
            <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"

            >
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    spacing={1}
                    sx={{
                        cursor: "pointer",
                        width: 'fit-content',
                    }}
                    component={Link}
                    to="/"
                    onClick={() => setMobileOpen(false)}

                >
                    <img src={logo} alt="logo"
                        style={{
                            width: 80,
                            height: 80
                        }}
                    />
                    <CTypography
                        fontSize="50px"
                        fontWeight="700"
                        textTransform="uppercase"

                    >
                        hihami
                    </CTypography>
                </Stack>
                <IconButton
                    onClick={() => setMobileOpen(false)}
                >
                    <CloseIcon
                        sx={{
                            color: "white",
                        }}
                    />
                </IconButton>
            </Stack>

            {/* nav menu items section */}
            {/* navbar section */}
            <Stack
                spacing={2}
                p={3}
            >
                {
                    routes.map((route, index) => {
                        return (
                            <NavLink
                                to={route.path}
                                key={index}
                                style={({ isActive }) => (isActive ?
                                    {
                                        color: "#fff",
                                        // color: "#fff",
                                        fontSize: '16px',
                                        fontWeight: 400,
                                        padding: '10px 0',
                                        borderRadius: '4px',
                                        background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 100%)',
                                        backdropFilter: 'blur(20.8333px)',
                                    }
                                    : {
                                        color: "#fff",
                                        fontSize: '16px',
                                        fontWeight: 400,
                                    })}
                                onClick={() => setMobileOpen(false)}
                            >
                                <Box
                                    component="span"
                                    sx={{
                                        "&:hover": {
                                            color: "#AD1AAF",
                                            borderBottom: "2px solid #AD1AAF",
                                        }
                                    }}

                                >{route.name}
                                </Box>
                            </NavLink>
                        )
                    })
                }

            </Stack>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{
            display: 'flex',
        }}>
            <AppBar component="nav"
                sx={{
                    backgroundColor: '#140C1F',
                    boxShadow: 'none',
                    px: {
                        md: 8,
                        xs: 0,
                    },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={() => setMobileOpen(true)}
                        sx={{ mr: 2, display: { md: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Stack
                        direction={{
                            md: "column",
                            lg: "row",
                        }}
                        justifyContent="space-between"
                        alignItems="center"
                        sx={{
                            width: '100%',
                            py: 4,
                            display: {
                                xs: 'none',
                                md: 'flex',
                            }
                        }}
                        spacing={2}
                    >
                        {/* logo section */}
                        <Stack
                            direction="row"
                            alignItems="center"
                            spacing={1}
                            sx={{
                                cursor: "pointer",
                            }}
                            component={Link}
                            to="/"

                        >
                            <img src={logo} alt="logo"
                                style={{
                                    width: 80,
                                    height: 80
                                }}
                            />
                            <CTypography
                                fontSize="50px"
                                fontWeight="700"
                                textTransform="uppercase"

                            >
                                hihami
                            </CTypography>
                        </Stack>
                        {/* navbar section */}
                        <Stack
                            sx={{
                                background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 100%)',
                                backdropFilter: 'blur(20.8333px)',
                            }}
                            direction="row"
                            spacing={2}
                            p={3}
                        >
                            {
                                routes.map((route, index) => {
                                    return (
                                        <NavLink
                                            to={route.path}
                                            key={index}
                                            style={({ isActive }) => (isActive ?
                                                {
                                                    color: "#fff",
                                                    // color: "#fff",
                                                    fontSize: '16px',
                                                    fontWeight: 400,
                                                    borderBottom: "2px solid #AD1AAF",
                                                }
                                                : {
                                                    color: "#fff",
                                                    fontSize: '16px',
                                                    fontWeight: 400,
                                                })}
                                        >
                                            <Box
                                                component="span"
                                                sx={{
                                                    "&:hover": {
                                                        color: "#AD1AAF",
                                                    }
                                                }}

                                            >{route.name}
                                            </Box>
                                        </NavLink>
                                    )
                                })
                            }

                        </Stack>
                        {/* button and avater  */}
                        <Stack
                            direction="row"
                            alignItems="center"
                            spacing={4}
                        >
                            <CButton
                                btnTitle={'Connect Wallet'}
                            />

                            <Avatar
                                alt="Remy Sharp"
                                src={UserProfile}
                                sx={{
                                    width: 40,
                                    height: 40,
                                }}
                            />
                        </Stack>
                    </Stack>

                </Toolbar>
            </AppBar>

            <Box component="nav" >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    PaperProps={{
                        sx: {
                            backgroundColor: '#140C1F',
                        }
                    }}
                    sx={{
                        display: { xs: 'block', lg: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },

                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box component="main" sx={{
                // p: 3,
                // backgroundColor: '#140C1F',
                width: '100%',

            }}>
                <Toolbar />
                <Box
                    sx={{
                        px: {
                            md: 10,
                            xs: 2,
                        },
                        pt: {
                            xs: 0,
                            md: 28,
                            lg: 8,
                        },
                    }}
                >
                    <Outlet />
                    {children}

                </Box>
                {/* <Footer /> */}
            </Box>
        </Box >
    );
}


export default DrawerAppBar;
