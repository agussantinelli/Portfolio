'use client';
import { Box, Container, Typography, Button, IconButton, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';
import './styles/Contact.css';

export default function Contact() {
    return (
        <Box component="section" id="contact" className="contact-section">
            <Container maxWidth="sm">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <Typography
                        variant="overline"
                        className="contact-overline"
                    >
                        WHAT'S NEXT?
                    </Typography>
                    <Typography
                        variant="h2"
                        className="contact-title"
                    >
                        Get In Touch
                    </Typography>
                    <Typography
                        variant="body1"
                        className="contact-description"
                    >
                        I'm currently looking for new opportunities and my inbox is always open.
                        Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </Typography>

                    <Button
                        variant="outlined"
                        size="large"
                        href="mailto:agussantinelli.dev@gmail.com"
                        className="btn-say-hello"
                    >
                        Say Hello
                    </Button>

                    <Stack
                        direction="row"
                        spacing={4}
                        justifyContent="center"
                        className="social-stack"
                    >
                        {[
                            { icon: <GitHub />, link: 'https://github.com/agussantinelli' },
                            { icon: <LinkedIn />, link: 'https://linkedin.com/in/agustinsantinelli' },
                            { icon: <Email />, link: 'mailto:agustinsantinelli@gmail.com' }
                        ].map((social, i) => (
                            <IconButton
                                key={i}
                                component="a"
                                href={social.link}
                                target="_blank"
                                className="social-icon-btn"
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
