'use client';
import { Box, Container, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import './styles/Skills.css';

const skills = [
    {
        category: 'Languages',
        items: ['TypeScript', 'JavaScript', 'C#', 'Java', 'SQL', 'HTML & CSS']
    },
    {
        category: 'Backend & APIs',
        items: ['Node.js (Express)', 'ASP.NET Core', 'Spring Boot', 'Jakarta EE']
    },
    {
        category: 'Frontend & Mobile',
        items: ['React', 'Next.js', 'Angular', 'Blazor WASM', 'Material UI']
    },
    {
        category: 'Databases & Tools',
        items: ['PostgreSQL', 'SQL Server', 'MySQL', 'Prisma', 'Hibernate', 'GitHub', 'Maven']
    }
];

export default function Skills() {
    return (
        <Box component="section" id="skills" className="skills-section">
            <Container maxWidth="lg">
                <Typography
                    variant="h3"
                    className="skills-title"
                >
                    Skills <span>&</span> Technologies
                </Typography>
                <Grid container spacing={4} justifyContent="center">
                    {skills.map((skillGroup, index) => (
                        <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="skill-card"
                            >
                                <Typography className="skill-category">
                                    {skillGroup.category}
                                </Typography>

                                <div className="skill-list">
                                    {skillGroup.items.map((skill) => (
                                        <div key={skill} className="skill-item">
                                            {skill}
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}