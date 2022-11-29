import MenuIcon from '@mui/icons-material/Menu';
import { Avatar } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Toolbar from '@mui/material/Toolbar';
import { Stack } from '@mui/system';
import * as React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import logo from "../../assets/images/logo.png";
import UserProfile from "../../assets/images/UserProfile.png";
import { CButton, CTypography } from '../../utility';

const drawerWidth = 240;
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
        <Box onClick={handleDrawerToggle} sx={{
            textAlign: 'center',
            backgroundColor: '#282C33',
        }}>
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
                        // width: 30,
                        // height: 30
                        flexGlow: 1,
                        width: 50,
                        height: 50,
                    }}
                />
                <CTypography>
                    {logoTitle}
                </CTypography>
            </Stack>
            {/* <Stack
                direction="row"
                alignItems="center"
                justifyContent="center"
                spacing={1}
                component="a"
                href="#"
                sx={{
                    cursor: "pointer",
                }}
                py={2}
            >
                <img src={logo} alt="logo"
                    style={{ width: 15, height: 15 }}
                />
                <CTypography
                    fontSize="1rem"
                >
                    Abdul Kader
                </CTypography>
            </Stack> */}
            {/* <Typography variant="h6" sx={{ my: 2 }}>
                MUI
            </Typography> */}
            <Divider />
            <List>
                {routes.map((item) => (
                    <ListItem key={Math.random()} disablePadding>
                        <ListItemButton sx={{
                            textAlign: 'center',
                            fontSize: '1.2rem',
                        }}>
                            {/* <ListItemText primary={item.name}
                                component={NavLink}
                                to={item.path}

                            /> */}
                            <NavLink
                                to={item.path}
                                key={item.id}
                                style={({ isActive }) => (isActive ?
                                    {
                                        // borderRight: "4px solid white",
                                        // background: "rgb(45, 51, 89)"
                                        color: "#fff",
                                        fontFamily: "FiraCode",
                                        fontWeight: 600,

                                    }
                                    : {
                                        color: "#ABB2BF",
                                        fontFamily: "FiraCode",
                                        fontWeight: 400,

                                    })}
                            >
                                <span
                                    style={{
                                        color: "#C778DD"
                                    }}
                                >
                                    #
                                </span>
                                <Box
                                    component="span"
                                    sx={{
                                        "&:hover": {
                                            color: "#fff",
                                        }
                                    }}

                                >{item.name}
                                </Box>
                            </NavLink>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
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
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        sx={{
                            width: '100%',
                            py: 4,
                        }}
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
                            p={4}
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
                                                    fontSize: '18px',
                                                    fontWeight: 400,
                                                    borderBottom: "2px solid #AD1AAF",
                                                }
                                                : {
                                                    color: "#fff",
                                                    fontSize: '18px',
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
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },


                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box component="main" sx={{
                p: 3,
                // backgroundColor: '#140C1F',
                width: '100%',

            }}>
                <Toolbar />
                <Box
                    sx={{
                        pl: 8,
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
