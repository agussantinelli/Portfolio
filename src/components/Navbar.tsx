'use client';
import { AppBar, Toolbar, Typography, Button, Stack, Container, Box } from '@mui/material';
import { motion } from 'framer-motion';

const navItems = [
    { name: 'Sobre mí', href: '#' },
    { name: 'Aptitudes', href: '#skills' },
    { name: 'Proyectos', href: '#projects' },
    { name: 'Contacto', href: '#contact' },
];

export default function Navbar() {
    return (
        <AppBar position="sticky" sx={{ bgcolor: 'rgba(10, 25, 47, 0.85)', backdropFilter: 'blur(10px)', boxShadow: 'none' }}>
            <Container maxWidth="lg">
                <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
                    <Typography variant="h6" component="div" sx={{ color: '#64ffda', fontWeight: 700, letterSpacing: 1 }}>
                        AS
                    </Typography>
                    <Stack direction="row" spacing={1} sx={{ display: { xs: 'none', md: 'flex' } }}>
                        {navItems.map((item, index) => (
                            <Button
                                key={item.name}
                                href={item.href}
                                sx={{
                                    color: '#ccd6f6',
                                    textTransform: 'none',
                                    fontSize: '0.9rem',
                                    '&:hover': { color: '#64ffda' }
                                }}
                            >
                                <Box component="span" sx={{ color: '#64ffda', mr: 0.5 }}>0{index + 1}.</Box>
                                {item.name}
                            </Button>
                        ))}
                        <Button
                            variant="outlined"
                            color="primary"
                            sx={{ ml: 2, textTransform: 'none', fontSize: '0.9rem' }}
                        >
                            CV
                        </Button>
                    </Stack>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
