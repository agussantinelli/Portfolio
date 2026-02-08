'use client';
import { AppBar, Toolbar, Typography, Button, Stack, Container, Box, IconButton, useScrollTrigger, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { motion } from 'framer-motion';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import './styles/Navbar.css';

const navItems = [
    { name: 'Home', href: '#' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
];

const NavButton = ({ item, index }: { item: typeof navItems[0], index: number }) => (
    <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
    >
        <Button
            href={item.href}
            className="nav-link"
        >
            {item.name}
        </Button>
    </motion.div>
);

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 50,
    });

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box
            onClick={handleDrawerToggle}
            className="mobile-drawer-container"
        >
            <Box className="mobile-drawer-header">
                <Typography className="brand-text">
                    AGUSTÍN<span>.</span>
                </Typography>
                <IconButton className="close-drawer-btn">
                    <CloseIcon />
                </IconButton>
            </Box>
            <List className="mobile-drawer-list">
                {navItems.map((item) => (
                    <ListItem key={item.name} disablePadding>
                        <ListItemButton
                            className="mobile-nav-btn"
                            href={item.href}
                        >
                            <ListItemText primary={item.name} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Box sx={{ px: 3, pt: 2 }}>
                <Button
                    variant="outlined"
                    fullWidth
                    className="btn-resume-mobile"
                >
                    Resume
                </Button>
            </Box>
        </Box>
    );

    return (
        <>
            <AppBar
                position="fixed"
                className="navbar-appbar"
                sx={{
                    bgcolor: trigger ? 'rgba(2, 6, 23, 0.9)' : 'transparent',
                    backdropFilter: trigger ? 'blur(10px)' : 'none',
                    boxShadow: trigger ? '0 4px 30px rgba(0, 0, 0, 0.5)' : 'none',
                    borderBottom: trigger ? '1px solid rgba(255, 255, 255, 0.05)' : 'none'
                }}
            >
                <Container maxWidth="lg">
                    <Toolbar sx={{ justifyContent: 'space-between', py: trigger ? 1 : 2 }}>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <Typography
                                variant="h5"
                                component="a"
                                href="#"
                                className="brand-text"
                            >
                                AGUSTÍN<span>.</span>
                            </Typography>
                        </motion.div>

                        <Stack direction="row" spacing={1} sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
                            {navItems.map((item, index) => (
                                <NavButton key={item.name} item={item} index={index} />
                            ))}

                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                            >
                                <Button
                                    variant="outlined"
                                    className="btn-resume"
                                >
                                    Resume
                                </Button>
                            </motion.div>
                        </Stack>

                        <IconButton
                            className="mobile-menu-btn"
                            sx={{ display: { xs: 'flex', md: 'none' } }}
                            onClick={handleDrawerToggle}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </Container>
            </AppBar>
            <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                anchor="right"
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: 'block', md: 'none' },
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        width: 280,
                        bgcolor: 'var(--color-black)',
                        backgroundImage: 'none',
                        borderLeft: '1px solid rgba(255, 255, 255, 0.05)'
                    },
                }}
            >
                {drawer}
            </Drawer>
        </>
    );
}
