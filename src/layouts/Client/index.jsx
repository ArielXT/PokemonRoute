import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    Button,
    IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import AdbIcon from '@mui/icons-material/Adb';
import { Outlet } from "react-router-dom";

const pages = ['Products', 'Pricing', 'Blog','Pokemon','Protagonista','Region'];

const AppBarClient = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Rotomdex
                    </Typography>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/pokemons"
                        sx={{
                            fontFamily: 'monospace',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >| Lista Pokemon |</Typography>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/regiones"
                        sx={{
                            fontFamily: 'monospace',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                    | Lista de Regiones en Pokemon |</Typography>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/protagonista"
                        sx={{
                            fontFamily: 'monospace',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                    | Protagonistas a lo largo de Pokemon |</Typography>
                </Toolbar>
            </AppBar>
            {/* Este oulet va a fungir de children por ende va a ser dinamico, es decir por cada vista
        muestra algo distinto pero ojo el AppBar se mantiene */}
            <Outlet />
        </Box>
    );
};

export default AppBarClient;