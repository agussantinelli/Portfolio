'use client';
import { Box, Container, Typography, Button, IconButton, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';
import './styles/Contact.css';

export default function Contact() {
    return (
        <Box component="section" id="contact" className="contact-section">
            <Container maxWidth="md">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="contact-content"
                >
                    <Typography
                        variant="overline"
                        className="contact-overline"
                    >
                        What's Next?
                    </Typography>

                    <Typography
                        variant="h2"
                        className="contact-title"
                    >
                        Get In Touch.
                    </Typography>

                    <Typography
                        variant="body1"
                        className="contact-description"
                    >
                        I'm currently looking for new opportunities and my inbox is always open.
                        Whether you have a question, a project idea, or just want to say hi,
                        I'll try my best to get back to you!
                    </Typography>

                    <Box sx={{ mt: 6, mb: 8 }}>
                        <Button
                            variant="outlined"
                            size="large"
                            href="mailto:agustinsantinelli@gmail.com"
                            className="btn-say-hello"
                        >
                            Say Hello
                        </Button>
                    </Box>

                    <Stack
                        direction="row"
                        spacing={3}
                        justifyContent="center"
                        className="social-stack"
                    >
                        {[
                            { icon: <GitHub fontSize="large" />, link: 'https://github.com/agussantinelli' },
                            { icon: <LinkedIn fontSize="large" />, link: 'https://www.linkedin.com/in/agustin-santinelli-a60639300/' },
                            { icon: <Email fontSize="large" />, link: 'mailto:agustinsantinelli@gmail.com' }
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