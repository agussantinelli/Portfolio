'use client';
import { Box, Typography, Container } from '@mui/material';

export default function Footer() {
    return (
        <Box component="footer" sx={{ py: 4, bgcolor: '#0a192f', borderTop: '1px solid rgba(100, 255, 218, 0.1)', textAlign: 'center' }}>
            <Container maxWidth="lg">
                <Typography variant="body2" sx={{ color: '#8892b0' }}>
                    Diseñado y construido por Agus Santinelli
                </Typography>
                <Typography variant="caption" sx={{ color: '#8892b0', mt: 1, display: 'block' }}>
                    © {new Date().getFullYear()} - Todos los derechos reservados
                </Typography>
            </Container>
        </Box>
    );
}
