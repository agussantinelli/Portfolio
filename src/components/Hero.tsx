'use client';
import { Box, Typography, Button, Container } from '@mui/material';
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <Box
            component="section"
            sx={{
                height: '90vh',
                display: 'flex',
                alignItems: 'center',
                background: 'linear-gradient(to bottom, #0a192f 0%, #112240 100%)',
            }}
        >
            <Container maxWidth="md">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <Typography variant="overline" color="primary" sx={{ fontWeight: 600, letterSpacing: 2 }}>
                        HOLA, MI NOMBRE ES
                    </Typography>
                    <Typography
                        variant="h1"
                        sx={{
                            fontSize: { xs: '3rem', md: '5rem' },
                            fontWeight: 800,
                            color: '#ccd6f6',
                            mb: 2,
                        }}
                    >
                        Agus Santinelli.
                    </Typography>
                    <Typography
                        variant="h2"
                        sx={{
                            fontSize: { xs: '2rem', md: '4rem' },
                            fontWeight: 700,
                            color: '#8892b0',
                            mb: 4,
                        }}
                    >
                        Construyo experiencias digitales impactantes.
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#8892b0', maxWidth: '600px', mb: 6, fontSize: '1.1rem' }}>
                        Soy un desarrollador de software enfocado en crear aplicaciones web modernas,
                        escalables y con un diseño impecable. Especializado en el ecosistema de JavaScript y Java.
                    </Typography>
                    <Button
                        variant="outlined"
                        size="large"
                        color="primary"
                        sx={{ px: 4, py: 1.5, textTransform: 'none', fontSize: '1.1rem' }}
                    >
                        Ver mis proyectos
                    </Button>
                </motion.div>
            </Container>
        </Box>
    );
}
