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
                        opacity: 0.5,
                        fontWeight: 500,
                        letterSpacing: 1
                    }}
                >
                    Diseñado y construido por <Box component="span" sx={{ color: 'var(--color-aqua)' }}>Agus Santinelli</Box>
                </Typography>
                <Typography
                    variant="caption"
                    sx={{
                        color: 'var(--color-white)',
                        opacity: 0.3,
                        mt: 2,
                        display: 'block'
                    }}
                >
                    © {new Date().getFullYear()} — Todos los derechos reservados
                </Typography>
            </Container>
        </Box>
    );
}
