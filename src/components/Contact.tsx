'use client';
import { Box, Container, Typography, Button, Stack, IconButton } from '@mui/material';
import { GitHub, LinkedIn, Email, Twitter } from '@mui/icons-material';
import { motion } from 'framer-motion';

export default function Contact() {
    return (
        <Box component="section" id="contact" sx={{ py: 20, bgcolor: 'var(--color-black)', textAlign: 'center', position: 'relative' }}>
            <Container maxWidth="sm">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <Typography
                        variant="overline"
                        sx={{
                            fontWeight: 700,
                            letterSpacing: 4,
                            color: 'var(--color-aqua)',
                            mb: 2,
                            display: 'block'
                        }}
                    >
                        ¿QUÉ SIGUE?
                    </Typography>
                    <Typography
                        variant="h2"
                        sx={{
                            color: 'var(--color-white)',
                            fontWeight: 800,
                            mb: 3,
                            fontSize: { xs: '2.5rem', md: '3.5rem' }
                        }}
                    >
                        Ponte en Contacto
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            color: 'var(--color-white)',
                            opacity: 0.6,
                            mb: 8,
                            fontSize: '1.1rem',
                            lineHeight: 1.8
                        }}
                    >
                        Actualmente estoy buscando nuevas oportunidades para colaborar en proyectos interesantes.
                        Si tienes alguna pregunta o simplemente quieres saludar, ¡mi bandeja de entrada siempre está abierta!
                    </Typography>

                    <Button
                        variant="contained"
                        size="large"
                        href="mailto:tuemail@ejemplo.com"
                        sx={{
                            px: 10,
                            py: 2.5,
                            textTransform: 'none',
                            fontSize: '1.2rem',
                            mb: 10,
                            bgcolor: 'var(--color-aqua)',
                            color: 'var(--color-black)',
                            fontWeight: 700,
                            borderRadius: '16px',
                            '&:hover': {
                                bgcolor: 'var(--color-aqua)',
                                boxShadow: '0 0 30px rgba(0, 255, 242, 0.4)',
                                transform: 'scale(1.05)'
                            },
                            transition: 'all 0.3s'
                        }}
                    >
                        Di Hola
                    </Button>

                    <Stack direction="row" spacing={3} justifyContent="center">
                        {[
                            { icon: <GitHub />, href: "https://github.com/tuusuario" },
                            { icon: <LinkedIn />, href: "https://linkedin.com/in/tuusuario" },
                            { icon: <Twitter />, href: "https://twitter.com/tuusuario" }
                        ].map((social, i) => (
                            <IconButton
                                key={i}
                                href={social.href}
                                target="_blank"
                                sx={{
                                    color: 'var(--color-white)',
                                    opacity: 0.7,
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                    p: 1.5,
                                    transition: 'all 0.3s',
                                    '&:hover': {
                                        color: 'var(--color-aqua)',
                                        borderColor: 'var(--color-aqua)',
                                        bgcolor: 'rgba(0, 255, 242, 0.05)',
                                        transform: 'translateY(-5px)'
                                    }
                                }}
                            >
                                {social.icon}
                            </IconButton>
                        ))}
                    </Stack>
                </motion.div>
            </Container>
        </Box>
    );
}
