'use client';
import { Box, Container, Typography, Grid, Card, CardContent, CardActions, Button, Chip } from '@mui/material';
import { motion } from 'framer-motion';

const projects = [
    {
        title: 'Sysacad Next',
        description: 'Sistema de gestión académica moderno para la UTN. Refactorización completa del backend con Spring Boot y frontend con Angular para mejorar la experiencia del alumno.',
        stack: ['Java', 'Spring Boot', 'Angular', 'PostgreSQL', 'Docker'],
        link: '#',
    },
    {
        title: 'FinanzApp',
        description: 'Aplicación de gestión de finanzas personales. Permite el seguimiento de gastos, ingresos y ahorros con dashboards interactivos y reportes mensuales automatizados.',
        stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Chart.js'],
        link: '#',
    },
    {
        title: 'TicketApp',
        description: 'Plataforma de soporte técnico basada en tickets. Optimiza la resolución de incidencias internas mediante un sistema de priorización y asignación inteligente.',
        stack: ['Next.js', 'TypeScript', 'Firebase', 'MUI'],
        link: '#',
    },
    {
        title: 'BuyJugador',
        description: 'Marketplace especializado en la compra y venta de perfiles deportivos. Facilita la conexión entre reclutadores y deportistas de diversas disciplinas.',
        stack: ['Spring Boot', 'Next.js', 'PostgreSQL', 'Tailwind CSS'],
        link: '#',
    },
    {
        title: 'ImpulsaMe',
        description: 'Plataforma de crowdfunding y mentoría para emprendedores. Proporciona herramientas para la exposición de ideas y recaudación de fondos para startups en etapas iniciales.',
        stack: ['Django', 'React', 'PostgreSQL', 'AWS'],
        link: '#',
    },
];

export default function Projects() {
    return (
        <Box component="section" id="projects" sx={{ py: 10, bgcolor: '#0a192f' }}>
            <Container maxWidth="lg">
                <Typography variant="h3" sx={{ color: '#ccd6f6', fontWeight: 700, mb: 6, textAlign: 'center' }}>
                    Proyectos Destacados
                </Typography>
                <Grid container spacing={4}>
                    {projects.map((project, index) => (
                        <Grid size={{ xs: 12, md: 4 }} key={index}>
                            <motion.div
                                whileHover={{ y: -10 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                            >
                                <Card sx={{ bgcolor: '#112240', color: '#ccd6f6', height: '100%', display: 'flex', flexDirection: 'column', border: '1px solid rgba(100, 255, 218, 0.1)' }}>
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, color: '#64ffda' }}>
                                            {project.title}
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: '#8892b0', mb: 3, lineHeight: 1.6 }}>
                                            {project.description}
                                        </Typography>
                                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                            {project.stack.map((tech) => (
                                                <Chip
                                                    key={tech}
                                                    label={tech}
                                                    size="small"
                                                    sx={{
                                                        bgcolor: 'rgba(100, 255, 218, 0.1)',
                                                        color: '#64ffda',
                                                        border: '1px solid #64ffda',
                                                        fontSize: '0.7rem'
                                                    }}
                                                />
                                            ))}
                                        </Box>
                                    </CardContent>
                                    <CardActions sx={{ p: 2, pt: 0 }}>
                                        <Button size="small" sx={{ color: '#64ffda', textTransform: 'none' }}>Ver más</Button>
                                    </CardActions>
                                </Card>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}
