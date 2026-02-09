'use client';
import { AppBar, Toolbar, Typography, Button, Stack, Container, Box, IconButton, useScrollTrigger, Drawer, List, ListItem, ListItemButton, ListItemText, Select, MenuItem } from '@mui/material';
import { motion } from 'framer-motion';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import LanguageIcon from '@mui/icons-material/Language';
import ReactCountryFlag from 'react-country-flag';
import { useLanguage } from '@/context/LanguageContext';
import './styles/Navbar.css';



const NavButton = ({ name, href, index }: { name: string, href: string, index: number }) => (
    <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
    >
        <Button
            href={href}
            className="nav-link"
        >
            {name}
        </Button>
    </motion.div>
);

export default function Navbar() {
    const { language, setLanguage, t } = useLanguage();
    const [mobileOpen, setMobileOpen] = useState(false);

    const navItems = [
        { name: t.nav.home, href: '#' },
        { name: t.nav.skills, href: '#skills' },
        { name: t.nav.projects, href: '#projects' },
        { name: t.nav.contact, href: '#contact' },
    ];

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
                    AGUSTÍN <span>SANTINELLI</span>
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
            <Box sx={{ px: 3, pt: 2, display: 'flex', gap: 2, flexDirection: 'column' }}>
                <Select
                    value={language}
                    onChange={(e) => setLanguage(e.target.value as 'en' | 'es')}
                    className="language-selector-mobile"
                    size="small"
                    sx={{ bgcolor: 'rgba(255, 255, 255, 0.03)' }}
                >
                    <MenuItem value="en">
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <ReactCountryFlag countryCode="US" svg style={{ width: '1.5em', height: '1.5em' }} />
                            <span>English</span>
                        </Box>
                    </MenuItem>
                    <MenuItem value="es">
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <ReactCountryFlag countryCode="AR" svg style={{ width: '1.5em', height: '1.5em' }} />
                            <span>Español</span>
                        </Box>
                    </MenuItem>
                </Select>
                <Button
                    variant="outlined"
                    fullWidth
                    className="btn-resume-mobile"
                    href={t.nav.resumeUrl}
                    download
                >
                    {t.nav.resume}
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
                                AGUSTÍN  <span> SANTINELLI</span>
                            </Typography>
                        </motion.div>

                        <Stack direction="row" spacing={1} sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
                            {navItems.map((item, index) => (
                                <NavButton key={item.name} name={item.name} href={item.href} index={index} />
                            ))}

                            <Box className="language-selector">
                                <LanguageIcon sx={{ fontSize: '1.1rem', color: 'var(--color-slate)', mr: 0.5 }} />
                                <Select
                                    value={language}
                                    onChange={(e) => setLanguage(e.target.value as 'en' | 'es')}
                                    size="small"
                                    className="language-select"
                                    sx={{
                                        color: 'var(--color-white)',
                                        '.MuiOutlinedInput-notchedOutline': { border: 'none' },
                                        '.MuiSvgIcon-root': { color: 'var(--color-blue-primary)' }
                                    }}
                                >
                                    <MenuItem value="en">
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
                                            <ReactCountryFlag countryCode="US" svg style={{ width: '1.2em', height: '1.2em' }} />
                                            <span>EN</span>
                                        </Box>
                                    </MenuItem>
                                    <MenuItem value="es">
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
                                            <ReactCountryFlag countryCode="AR" svg style={{ width: '1.2em', height: '1.2em' }} />
                                            <span>ES</span>
                                        </Box>
                                    </MenuItem>
                                </Select>
                            </Box>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                            >
                                <Button
                                    variant="outlined"
                                    className="btn-resume"
                                    href={t.nav.resumeUrl}
                                    download
                                >
                                    {t.nav.resume}
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
