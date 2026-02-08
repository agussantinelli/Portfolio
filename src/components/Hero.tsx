'use client';
import { Box, Typography, Button, Container, Stack } from '@mui/material';
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <Box
            component="section"
            sx={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                bgcolor: 'var(--color-black)',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: '-10%',
                    right: '-5%',
                    width: '400px',
                    height: '400px',
                    bgcolor: 'rgba(0, 255, 242, 0.05)',
                    filter: 'blur(100px)',
                    borderRadius: '50%',
                    zIndex: 0,
                }
            }}
        >
            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <Typography
                        variant="overline"
                        sx={{
                            fontWeight: 600,
                            letterSpacing: 3,
                            color: 'var(--color-aqua)',
                            mb: 2,
                            display: 'block'
                        }}
                    >
                        HOLA, MI NOMBRE ES
                    </Typography>
                    <Typography
                        variant="h1"
                        sx={{
                            fontSize: { xs: '3.5rem', md: '5.5rem' },
                            fontWeight: 900,
                            color: 'var(--color-white)',
                            mb: 1,
                            lineHeight: 1.1,
                        }}
                    >
                        Agus Santinelli.
                    </Typography>
                    <Typography
                        variant="h2"
                        sx={{
                            fontSize: { xs: '2rem', md: '4rem' },
                            fontWeight: 700,
                            color: 'var(--color-sky)',
                            opacity: 0.8,
                            mb: 4,
                            lineHeight: 1.2,
                        }}
                    >
                        Construyo experiencias digitales impactantes.
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            color: 'var(--color-white)',
                            opacity: 0.7,
                            maxWidth: '650px',
                            mb: 6,
                            fontSize: '1.15rem',
                            lineHeight: 1.8
                        }}
                    >
                        Soy un desarrollador de software enfocado en crear aplicaciones web modernas,
                        escalables y con un diseño impecables. Especializado en el ecosistema de full-stack development.
                    </Typography>
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                        <Button
                            variant="contained"
                            size="large"
                            sx={{
                                px: 5,
                                py: 2,
                                textTransform: 'none',
                                fontSize: '1.1rem',
                                bgcolor: 'var(--color-aqua)',
                                color: 'var(--color-black)',
                                fontWeight: 700,
                                borderRadius: '12px',
                                '&:hover': {
                                    bgcolor: 'var(--color-aqua)',
                                    boxShadow: '0 0 25px rgba(0, 255, 242, 0.4)',
                                    transform: 'translateY(-2px)'
                                },
                                transition: 'all 0.3s'
                            }}
                        >
                            Ver mis proyectos
                        </Button>
                        <Button
                            variant="outlined"
                            size="large"
                            sx={{
                                px: 5,
                                py: 2,
                                textTransform: 'none',
                                fontSize: '1.1rem',
                                borderColor: 'rgba(255, 255, 255, 0.2)',
                                color: 'var(--color-white)',
                                fontWeight: 600,
                                borderRadius: '12px',
                                '&:hover': {
                                    borderColor: 'var(--color-white)',
                                    bgcolor: 'rgba(255, 255, 255, 0.05)',
                                    transform: 'translateY(-2px)'
                                },
                                transition: 'all 0.3s'
                            }}
                        >
                            Contáctame
                        </Button>
                    </Stack>
                </motion.div>
            </Container>
        </Box>
    );
}
