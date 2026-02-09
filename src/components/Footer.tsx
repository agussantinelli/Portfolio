'use client';
import { Box, Container, Typography } from '@mui/material';
import { useLanguage } from '@/context/LanguageContext';
import './styles/Footer.css';

export default function Footer() {
    const { t } = useLanguage();

    return (
        <Box component="footer" className="footer-section">
            <Container maxWidth="lg">
                <Typography
                    variant="body2"
                    className="footer-credit"
                >
                    {t.footer.credit}
                </Typography>
                <Typography
                    variant="caption"
                    className="footer-tech"
                >
                    © {new Date().getFullYear()} — {t.footer.tech}
                </Typography>
            </Container>
        </Box>
    );
}
