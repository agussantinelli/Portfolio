'use client';
import { AppBar, Toolbar, Typography, Button, Stack, Container, Box, IconButton, useScrollTrigger } from '@mui/material';
import { motion } from 'framer-motion';
import MenuIcon from '@mui/icons-material/Menu';
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
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 50,
    });

    return (
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
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
