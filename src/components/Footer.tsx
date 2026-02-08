'use client';
import { Box, Container, Typography } from '@mui/material';
import './styles/Footer.css';

export default function Footer() {
    return (
        <Box component="footer" className="footer-section">
            <Container maxWidth="lg">
                <Typography
                    variant="body2"
                    className="footer-credit"
                >
                    Designed & Built by Agustín Santinelli
                </Typography>
                <Typography
                    variant="caption"
                    className="footer-tech"
                >
                    © {new Date().getFullYear()} — Built with Next.js & MUI
                </Typography>
            </Container>
        </Box>
    );
}
