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
        <Box component="section" id="projects" sx={{ py: 15, bgcolor: 'var(--color-black)' }}>
            <Container maxWidth="lg">
                <Typography
                    variant="h3"
                    sx={{
                        color: 'var(--color-white)',
                        fontWeight: 800,
                        mb: 8,
                        textAlign: 'center',
                        '& span': { color: 'var(--color-aqua)' }
                    }}
                >
                    Proyectos <span>Destacados</span>
                </Typography>
                <Grid container spacing={4}>
                    {projects.map((project, index) => (
                        <Grid size={{ xs: 12, md: 4 }} key={index}>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -12 }}
                            >
                                <Card
                                    elevation={0}
                                    sx={{
                                        bgcolor: 'rgba(255, 255, 255, 0.02)',
                                        color: 'var(--color-white)',
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        borderRadius: '24px',
                                        border: '1px solid rgba(255, 255, 255, 0.05)',
                                        overflow: 'hidden',
                                        transition: 'all 0.4s ease',
                                        '&:hover': {
                                            borderColor: 'rgba(0, 255, 242, 0.3)',
                                            boxShadow: '0 20px 40px -20px rgba(0, 0, 0, 0.7), 0 0 20px rgba(0, 255, 242, 0.05)',
                                            '& .project-title': { color: 'var(--color-aqua)' }
                                        }
                                    }}
                                >
                                    <CardContent sx={{ flexGrow: 1, p: 4 }}>
                                        <Typography
                                            variant="h5"
                                            className="project-title"
                                            gutterBottom
                                            sx={{
                                                fontWeight: 700,
                                                color: 'var(--color-white)',
                                                transition: 'color 0.3s ease'
                                            }}
                                        >
                                            {project.title}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                color: 'var(--color-white)',
                                                opacity: 0.6,
                                                mb: 4,
                                                lineHeight: 1.8,
                                                fontSize: '0.95rem'
                                            }}
                                        >
                                            {project.description}
                                        </Typography>
                                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.2 }}>
                                            {project.stack.map((tech) => (
                                                <Chip
                                                    key={tech}
                                                    label={tech}
                                                    size="small"
                                                    sx={{
                                                        bgcolor: 'rgba(0, 255, 242, 0.05)',
                                                        color: 'var(--color-aqua)',
                                                        borderRadius: '6px',
                                                        border: '1px solid rgba(0, 255, 242, 0.2)',
                                                        fontSize: '0.75rem',
                                                        fontWeight: 600
                                                    }}
                                                />
                                            ))}
                                        </Box>
                                    </CardContent>
                                    <CardActions sx={{ p: 4, pt: 0 }}>
                                        <Button
                                            size="small"
                                            sx={{
                                                color: 'var(--color-aqua)',
                                                textTransform: 'none',
                                                fontWeight: 700,
                                                '&:hover': { bgcolor: 'rgba(0, 255, 242, 0.05)' }
                                            }}
                                        >
                                            Ver más ↗
                                        </Button>
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
