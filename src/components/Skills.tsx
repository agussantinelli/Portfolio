'use client';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const skills = [
    { category: 'Lenguajes', items: ['JavaScript', 'TypeScript', 'Java', 'Python', 'SQL', 'HTML/CSS'] },
    { category: 'Frontend', items: ['React', 'Next.js', 'Angular', 'Material UI', 'Tailwind CSS', 'Framer Motion'] },
    { category: 'Backend', items: ['Node.js', 'Spring Boot', 'Express', 'Django', 'PostgreSQL', 'MongoDB'] },
    { category: 'Herramientas', items: ['Git', 'Docker', 'Firebase', 'GitHub Actions', 'Vercel'] },
];

export default function Skills() {
    return (
        <Box component="section" id="skills" sx={{ py: 10, bgcolor: '#112240' }}>
            <Container maxWidth="lg">
                <Typography variant="h3" sx={{ color: '#ccd6f6', fontWeight: 700, mb: 6, textAlign: 'center' }}>
                    Aptitudes y Tecnologías
                </Typography>
                <Grid container spacing={4}>
                    {skills.map((skillGroup, index) => (
                        <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Paper
                                    sx={{
                                        p: 3,
                                        bgcolor: '#0a192f',
                                        color: '#ccd6f6',
                                        height: '100%',
                                        border: '1px solid rgba(100, 255, 218, 0.1)',
                                        '&:hover': {
                                            borderColor: '#3f51b5',
                                        }
                                    }}
                                >
                                    <Typography variant="h6" sx={{ color: '#3f51b5', fontWeight: 600, mb: 2 }}>
                                        {skillGroup.category}
                                    </Typography>
                                    <Box component="ul" sx={{ p: 0, m: 0, listStyle: 'none' }}>
                                        {skillGroup.items.map((item) => (
                                            <Typography key={item} component="li" variant="body1" sx={{ color: '#8892b0', mb: 1, display: 'flex', alignItems: 'center' }}>
                                                <Box component="span" sx={{ color: '#3f51b5', mr: 1 }}>▹</Box>
                                                {item}
                                            </Typography>
                                        ))}
                                    </Box>
                                </Paper>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}
