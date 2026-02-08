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
        <Box component="section" id="skills" sx={{ py: 15, bgcolor: 'var(--color-black)', position: 'relative' }}>
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
                    Habilidades <span>&</span> Tecnologías
                </Typography>
                <Grid container spacing={3}>
                    {skills.map((skillGroup, index) => (
                        <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Paper
                                    elevation={0}
                                    sx={{
                                        p: 4,
                                        bgcolor: 'rgba(255, 255, 255, 0.03)',
                                        borderRadius: '20px',
                                        height: '100%',
                                        border: '1px solid rgba(0, 255, 242, 0.05)',
                                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                        '&:hover': {
                                            transform: 'translateY(-10px)',
                                            bgcolor: 'rgba(0, 255, 242, 0.02)',
                                            borderColor: 'rgba(0, 255, 242, 0.3)',
                                            boxShadow: '0 10px 40px -10px rgba(0, 0, 0, 0.5), 0 0 20px rgba(0, 255, 242, 0.1)',
                                        }
                                    }}
                                >
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            color: 'var(--color-aqua)',
                                            fontWeight: 700,
                                            mb: 3,
                                            fontSize: '1.2rem',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 1.5
                                        }}
                                    >
                                        {skillGroup.category}
                                    </Typography>
                                    <Box component="ul" sx={{ p: 0, m: 0, listStyle: 'none' }}>
                                        {skillGroup.items.map((item) => (
                                            <Typography
                                                key={item}
                                                component="li"
                                                variant="body2"
                                                sx={{
                                                    color: 'var(--color-white)',
                                                    opacity: 0.7,
                                                    mb: 1.5,
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    fontWeight: 500
                                                }}
                                            >
                                                <Box component="span" sx={{ color: 'var(--color-aqua)', mr: 1.5, fontSize: '0.8rem' }}>✦</Box>
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
