'use client';
import { Box, Container, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import './styles/Skills.css';

const skills = [
    {
        category: 'Languages & Core',
        items: ['TypeScript', 'JavaScript', 'C#', 'Java', 'SQL', 'HTML', 'CSS']
    },
    {
        category: 'Backend & Infrastructure',
        items: ['Node.js', 'Hono', 'Express', 'ASP.NET Core', 'Spring Boot', 'Jakarta EE']
    },
    {
        category: 'Frontend & Mobile',
        items: ['React', 'Astro', 'Next.js', 'Angular', 'React Native', 'Blazor WASM', 'Windows Forms']
    },
    {
        category: 'UI & State',
        items: ['Nanostores', 'Zustand', 'Material UI', 'CSS Modules', 'Sileo']
    },
    {
        category: 'Strategy, Architecture & Logic',
        items: ['Clean Architecture', '7-File Blueprint', 'Islands Architecture', 'Modular Monolith', 'Zod (Strict)', 'JWT (Auth)', 'OpenAPI (Swagger)']
    },
    {
        category: 'Databases & ORMs',
        items: ['PostgreSQL', 'MySQL', 'SQL Server', 'Prisma', 'Drizzle ORM', 'EF Core', 'Hibernate', 'ADO.NET']
    },
    {
        category: 'Testing Ecosystem',
        items: ['Playwright (E2E)', 'Cypress (E2E)', 'Vitest', 'MSW', 'Faker.js', 'Jest', 'Jasmine', 'Karma']
    },
    {
        category: 'DevOps & VCS',
        items: ['GitHub Actions', 'Docker', 'Maven']
    }
];


export default function Skills() {
    const { t } = useLanguage();

    return (
        <Box component="section" id="skills" className="skills-section">
            <Container maxWidth="lg">
                <Typography
                    variant="h3"
                    className="skills-title"
                >
                    {t.skills.title} <span>&</span> {t.skills.subtitle}
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
