'use client';
import { Box, Container, Typography, Button, IconButton, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';
import { useLanguage } from '@/context/LanguageContext';
import './styles/Contact.css';

export default function Contact() {
    const { t } = useLanguage();

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
                        {t.contact.overline}
                    </Typography>

                    <Typography
                        variant="h2"
                        className="contact-title"
                    >
                        {t.contact.title}
                    </Typography>

                    <Typography
                        variant="body1"
                        className="contact-description"
                    >
                        {t.contact.description}
                    </Typography>

                    <Box sx={{ mt: 6, mb: 8 }}>
                        <Button
                            variant="outlined"
                            size="large"
                            href="mailto:agustinsantinelli@gmail.com"
                            className="btn-say-hello"
                        >
                            {t.contact.button}
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