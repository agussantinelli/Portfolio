'use client';
import { AppBar, Toolbar, Typography, Button, Stack, Container, Box, IconButton, useScrollTrigger } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import MenuIcon from '@mui/icons-material/Menu';

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
            sx={{
                color: 'var(--color-white)',
                textTransform: 'none',
                fontSize: '0.95rem',
                fontWeight: 500,
                px: 2,
                position: 'relative',
                '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: '50%',
                    width: 0,
                    height: '2px',
                    bgcolor: 'var(--color-aqua)',
                    transition: 'all 0.3s ease-in-out',
                    transform: 'translateX(-50%)',
                },
                '&:hover': {
                    bgcolor: 'transparent',
                    color: 'var(--color-aqua)',
                    '&::after': {
                        width: '70%',
                    }
                }
            }}
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
            sx={{
                bgcolor: trigger ? 'rgba(17, 17, 17, 0.9)' : 'transparent',
                backdropFilter: trigger ? 'blur(10px)' : 'none',
                boxShadow: trigger ? '0 4px 30px rgba(0, 0, 0, 0.5)' : 'none',
                transition: 'all 0.3s ease-in-out',
                borderBottom: trigger ? '1px solid rgba(0, 255, 242, 0.1)' : 'none'
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
                            sx={{
                                color: 'var(--color-white)',
                                fontWeight: 800,
                                textDecoration: 'none',
                                display: 'flex',
                                alignItems: 'center',
                                gap: 0.5,
                                fontSize: '1.5rem',
                                '& span': {
                                    color: 'var(--color-aqua)',
                                    textShadow: '0 0 10px rgba(0, 255, 242, 0.5)'
                                }
                            }}
                        >
                            AGUS<span>.</span>
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
                                sx={{
                                    ml: 2,
                                    borderColor: 'var(--color-aqua)',
                                    color: 'var(--color-aqua)',
                                    textTransform: 'none',
                                    borderRadius: '8px',
                                    px: 3,
                                    fontWeight: 600,
                                    '&:hover': {
                                        borderColor: 'var(--color-aqua)',
                                        bgcolor: 'rgba(0, 255, 242, 0.1)',
                                        boxShadow: '0 0 15px rgba(0, 255, 242, 0.3)'
                                    }
                                }}
                            >
                                Resume
                            </Button>
                        </motion.div>
                    </Stack>

                    <IconButton
                        sx={{ display: { xs: 'flex', md: 'none' }, color: 'var(--color-white)' }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
