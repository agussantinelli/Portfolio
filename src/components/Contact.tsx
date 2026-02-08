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
                            letterSpacing: 3,
                            color: 'var(--color-aqua)',
                            mb: 2,
                            display: 'block'
                        }}
                    >
                        WHAT'S NEXT?
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
                        Get In Touch
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            color: 'var(--color-white)',
                            opacity: 0.6,
                            mb: 6,
                            fontSize: '1.1rem',
                            lineHeight: 1.8
                        }}
                    >
                        I'm currently looking for new opportunities and my inbox is always open.
                        Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </Typography>

                    <Button
                        variant="outlined"
                        size="large"
                        href="mailto:agussantinelli.dev@gmail.com"
                        sx={{
                            color: 'var(--color-aqua)',
                            borderColor: 'var(--color-aqua)',
                            px: 5,
                            py: 2,
                            textTransform: 'none',
                            fontSize: '1rem',
                            fontWeight: 700,
                            borderRadius: '12px',
                            '&:hover': {
                                bgcolor: 'rgba(0, 255, 242, 0.05)',
                                borderColor: 'var(--color-white)',
                                color: 'var(--color-white)',
                            }
                        }}
                    >
                        Say Hello
                    </Button>

                    <Stack
                        direction="row"
                        spacing={4}
                        justifyContent="center"
                        sx={{ mt: 10 }}
                    >
                        {[
                            { icon: <GitHub />, link: 'https://github.com/agussantinelli' },
                            { icon: <LinkedIn />, link: 'https://linkedin.com/in/agustinsantinelli' },
                            { icon: <Email />, link: 'mailto:agussantinelli.dev@gmail.com' }
                        ].map((social, i) => (
                            <IconButton
                                key={i}
                                component="a"
                                href={social.link}
                                target="_blank"
                                sx={{
                                    color: 'var(--color-white)',
                                    opacity: 0.4,
                                    transition: 'all 0.3s',
                                    '&:hover': {
                                        opacity: 1,
                                        color: 'var(--color-aqua)',
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
