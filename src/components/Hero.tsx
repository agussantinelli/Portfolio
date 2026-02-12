'use client';
import { Box, Typography, Button, Container, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import './styles/Hero.css';

export default function Hero() {
    const { language, t } = useLanguage();

    return (
        <Box component="section" id="home" className="hero-section">
            <Container maxWidth="lg">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="hero-content-wrapper" // Nueva clase contenedora
                >
                    {/* Nombre */}
                    <Typography
                        variant="h2"
                        component="h2"
                        className="hero-name font-geist-pixel"
                    >
                        Agustín Santinelli<Box component="span" sx={{ color: 'var(--color-yellow)' }}>.</Box>
                    </Typography>

                    {/* Rol / Subtítulo */}
                    <Typography
                        variant="h2"
                        component="h2"
                        className="hero-subtitle font-geist-pixel"
                    >
                        {language === 'en' ? (
                            <>Information Systems <br />Engineering Student.</>
                        ) : (
                            t.hero.role
                        )}
                    </Typography>

                    {/* Descripción */}
                    <Typography
                        variant="body1"
                        className="hero-description"
                    >
                        {language === 'en' ? (
                            <>Passionate about <strong>software engineering</strong>, clean architectures, and data-driven applications. Specializing in transforming complex business requirements into scalable, mission-critical software. Based in Rosario, Argentina.</>
                        ) : (
                            t.hero.description
                        )}
                    </Typography>

                    {/* Botones */}
                    <Stack
                        direction={{ xs: 'column', sm: 'row' }}
                        spacing={3}
                        className="hero-buttons" // Clase para separar el bloque entero
                    >
                        <Button
                            variant="contained"
                            size="large"
                            href="#projects"
                            className="btn-primary"
                        >
                            {t.hero.cta}
                        </Button>
                        <Button
                            variant="outlined"
                            size="large"
                            href="#contact"
                            className="btn-secondary"
                        >
                            {t.hero.contactButton}
                        </Button>
                    </Stack>
                </motion.div>
            </Container>
        </Box>
    );
}