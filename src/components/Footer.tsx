'use client';
import { Box, Typography, Container } from '@mui/material';

export default function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                py: 6,
                bgcolor: 'var(--color-black)',
                borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                textAlign: 'center'
            }}
        >
            <Container maxWidth="lg">
                <Typography
                    variant="body2"
                    sx={{
                        color: 'var(--color-white)',
                        opacity: 0.4,
                        fontWeight: 500,
                        letterSpacing: 1
                    }}
                >
                    Designed & Built by Agus Santinelli
                </Typography>
                <Typography
                    variant="caption"
                    sx={{
                        color: 'var(--color-white)',
                        opacity: 0.2,
                        mt: 1,
                        display: 'block',
                        fontSize: '0.7rem'
                    }}
                >
                    © {new Date().getFullYear()} — Built with Next.js & MUI
                </Typography>
            </Container>
        </Box>
    );
}
