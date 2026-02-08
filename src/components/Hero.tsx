'use client';
import { Box, Typography, Button, Container, Stack, Grid } from '@mui/material';
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
                            fontWeight: 700,
                            letterSpacing: 4,
                            color: 'var(--color-aqua)',
                            mb: 2,
                            display: 'block'
                        }}
                    >
                        HELLO, MY NAME IS
                    </Typography>

                    <Typography
                        variant="h1"
                        sx={{
                            fontSize: { xs: '3.5rem', md: '5.5rem' },
                            fontWeight: 900,
                            color: 'var(--color-white)',
                            lineHeight: 1.1,
                            mb: 2,
                            letterSpacing: '-0.02em'
                        }}
                    >
                        Agus Santinelli<Box component="span" sx={{ color: 'var(--color-aqua)' }}>.</Box>
                    </Typography>

                    <Typography
                        variant="h2"
                        sx={{
                            fontSize: { xs: '1.5rem', md: '2.5rem' },
                            fontWeight: 700,
                            color: 'var(--color-white)',
                            opacity: 0.6,
                            mb: 4,
                            maxWidth: '800px'
                        }}
                    >
                        Information Systems Engineering Student.
                    </Typography>

                    <Typography
                        variant="body1"
                        sx={{
                            fontSize: { xs: '1rem', md: '1.2rem' },
                            color: 'var(--color-white)',
                            opacity: 0.8,
                            mb: 6,
                            maxWidth: '750px',
                            lineHeight: 1.8
                        }}
                    >
                        Passionate about <strong>software engineering</strong>, <strong>clean architectures</strong>, and data-driven applications. Specializing in transforming complex business requirements into scalable, mission-critical software. Based in Rosario, Argentina.
                    </Typography>

                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 8 }}>
                        <Button
                            variant="contained"
                            size="large"
                            href="#projects"
                            sx={{
                                bgcolor: 'var(--color-aqua)',
                                color: 'var(--color-black)',
                                px: 4,
                                py: 1.5,
                                fontWeight: 800,
                                borderRadius: '12px',
                                '&:hover': {
                                    bgcolor: 'var(--color-white)',
                                    boxShadow: '0 0 20px rgba(0, 255, 242, 0.4)'
                                }
                            }}
                        >
                            View Projects
                        </Button>
                        <Button
                            variant="outlined"
                            size="large"
                            href="#contact"
                            sx={{
                                color: 'var(--color-white)',
                                borderColor: 'rgba(255, 255, 255, 0.3)',
                                px: 4,
                                py: 1.5,
                                fontWeight: 700,
                                borderRadius: '12px',
                                '&:hover': {
                                    borderColor: 'var(--color-aqua)',
                                    color: 'var(--color-aqua)',
                                    bgcolor: 'rgba(0, 255, 242, 0.05)'
                                }
                            }}
                        >
                            Get In Touch
                        </Button>
                    </Stack>

                    {/* Strategic Focus Areas */}
                    <Grid container spacing={3} sx={{ mt: 4 }}>
                        {[
                            { title: 'FinTech', desc: 'Market transparency ecosystems & asset management.' },
                            { title: 'Aca-Infrastructure', desc: 'Modernizing university management & administration.' },
                            { title: 'Mobility & Urban', desc: 'Scalable solutions for urban flow & event ticketing.' },
                            { title: 'Business Logic', desc: 'Efficient platforms for retail & social funding.' }
                        ].map((focus, i) => (
                            <Grid item xs={6} md={3} key={i}>
                                <Box sx={{ p: 2, borderLeft: '2px solid rgba(0, 255, 242, 0.3)', bgcolor: 'rgba(255, 255, 255, 0.02)' }}>
                                    <Typography variant="subtitle2" sx={{ color: 'var(--color-aqua)', fontWeight: 800, mb: 0.5 }}>
                                        {focus.title}
                                    </Typography>
                                    <Typography variant="caption" sx={{ color: 'var(--color-white)', opacity: 0.5 }}>
                                        {focus.desc}
                                    </Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </motion.div>
            </Container>
        </Box>
    );
}
