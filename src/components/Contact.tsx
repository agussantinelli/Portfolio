'use client';
import { Box, Container, Typography, Button, Stack, IconButton } from '@mui/material';
import { GitHub, LinkedIn, Email, Twitter } from '@mui/icons-material';
import { motion } from 'framer-motion';

export default function Contact() {
    return (
        <Box component="section" id="contact" sx={{ py: 15, bgcolor: '#0a192f', textAlign: 'center' }}>
            <Container maxWidth="sm">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <Typography variant="overline" color="primary" sx={{ fontWeight: 600, letterSpacing: 2 }}>
                        ¿QUÉ SIGUE?
                    </Typography>
                    <Typography variant="h3" sx={{ color: '#ccd6f6', fontWeight: 700, mb: 3 }}>
                        Ponte en Contacto
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#8892b0', mb: 6 }}>
                        Actualmente estoy buscando nuevas oportunidades para colaborar en proyectos interesantes.
                        Si tienes alguna pregunta o simplemente quieres saludar, ¡mi bandeja de entrada siempre está abierta!
                    </Typography>

                    <Button
                        variant="outlined"
                        size="large"
                        href="mailto:tuemail@ejemplo.com"
                        sx={{
                            px: 6,
                            py: 2,
                            textTransform: 'none',
                            fontSize: '1.1rem',
                            mb: 6
                        }}
                    >
                        Di Hola
                    </Button>

                    <Stack direction="row" spacing={2} justifyContent="center">
                        <IconButton href="https://github.com/tuusuario" target="_blank" color="primary">
                            <GitHub />
                        </IconButton>
                        <IconButton href="https://linkedin.com/in/tuusuario" target="_blank" color="primary">
                            <LinkedIn />
                        </IconButton>
                        <IconButton href="https://twitter.com/tuusuario" target="_blank" color="primary">
                            <Twitter />
                        </IconButton>
                    </Stack>
                </motion.div>
            </Container>
        </Box>
    );
}
