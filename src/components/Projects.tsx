'use client';
import { Box, Container, Typography, Grid, Card, CardContent, CardActions, Button, Chip } from '@mui/material';
import { motion } from 'framer-motion';

const projects = [
    {
        title: 'Sysacad Next',
        description: 'Sistema de gestión académica moderno para la UTN. Refactorización completa del backend y frontend.',
        stack: ['Java', 'Spring Boot', 'Angular', 'PostgreSQL'],
        link: '#',
    },
    {
        title: 'FinanzApp',
        description: 'Aplicación de gestión de finanzas personales con visualizaciones dinámicas y reportes detallados.',
        stack: ['React', 'Node.js', 'Express', 'MongoDB'],
        link: '#',
    },
    {
        title: 'TicketApp',
        description: 'Plataforma de gestión de tickets de soporte y atención al cliente para empresas.',
        stack: ['Next.js', 'Typescript', 'Firebase'],
        link: '#',
    },
];

export default function Projects() {
    return (
        <Box component="section" sx={{ py: 10, bgcolor: '#0a192f' }}>
            <Container maxWidth="lg">
                <Typography variant="h3" sx={{ color: '#ccd6f6', fontWeight: 700, mb: 6, textAlign: 'center' }}>
                    Proyectos Destacados
                </Typography>
                <Grid container spacing={4}>
                    {projects.map((project, index) => (
                        <Grid item xs={12} md={4} key={index}>
                            <motion.div
                                whileHover={{ y: -10 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                            >
                                <Card sx={{ bgcolor: '#112240', color: '#ccd6f6', height: '100%', display: 'flex', flexDirection: 'column' }}>
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                                            {project.title}
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: '#8892b0', mb: 3 }}>
                                            {project.description}
                                        </Typography>
                                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                            {project.stack.map((tech) => (
                                                <Chip
                                                    key={tech}
                                                    label={tech}
                                                    size="small"
                                                    sx={{ bgcolor: 'rgba(63, 81, 181, 0.1)', color: '#3f51b5', border: '1px solid #3f51b5' }}
                                                />
                                            ))}
                                        </Box>
                                    </CardContent>
                                    <CardActions sx={{ p: 2 }}>
                                        <Button size="small" color="primary">Saber más</Button>
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
