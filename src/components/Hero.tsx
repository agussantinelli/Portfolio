'use client';
import { Box, Typography, Button, Container, Stack, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import './styles/Hero.css';

export default function Hero() {
    return (
        <Box component="section" id="home" className="hero-section">
            <Container maxWidth="lg">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <Typography
                        variant="h1"
                        className="hero-name"
                    >
                        Agustín Santinelli<Box component="span" sx={{ color: 'var(--color-yellow)' }}>.</Box>
                    </Typography>

                    <Typography
                        variant="h2"
                        className="hero-subtitle"
                    >
                        Information Systems Engineering Student.
                    </Typography>

                    <Typography
                        variant="body1"
                        className="hero-description"
                    >
                        Passionate about <strong>software engineering</strong>, <strong>clean architectures</strong>, and data-driven applications. Specializing in transforming complex business requirements into scalable, mission-critical software. Based in Rosario, Argentina.
                    </Typography>

                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} sx={{ mb: 8 }}>
                        <Button
                            variant="contained"
                            size="large"
                            href="#projects"
                            className="btn-primary"
                        >
                            View Projects
                        </Button>
                        <Button
                            variant="outlined"
                            size="large"
                            href="#contact"
                            className="btn-secondary"
                        >
                            Get In Touch
                        </Button>
                    </Stack>
                </motion.div>
            </Container>
        </Box>
    );
}
