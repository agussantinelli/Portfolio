'use client';
import { Box, Container, Typography, Grid, Card, CardContent, CardActions, Button, Chip } from '@mui/material';
import { motion } from 'framer-motion';

const projects = [
    {
        title: "FinanzApp",
        description: "The definitive wealth dashboard for the Argentine investor. Consolidates assets (Crypto, stocks, CEDEARs, bonds) with real-time ARS/USD valuation, integrating AI for intelligent financial data parsing.",
        stack: ["Next.js 16", "ASP.NET Core 9", "PostgreSQL", "Material UI", "OpenRouter AI"],
        link: "https://github.com/agussantinelli/FinanzApp-FrontEnd"
    },
    {
        title: "Sysacad Next",
        description: "High-scale reengineering of the legacy UTN academic portal. Eliminates bureaucratic friction through a reactive architecture managing complex academic rules and peak concurrency.",
        stack: ["Angular 19", "Spring Boot 3.5", "Java 21", "PostgreSQL", "Hibernate"],
        link: "https://github.com/agussantinelli/Sysacad-Next-FrontEnd"
    },
    {
        title: "TicketApp",
        description: "High-end marketplace for event ticketing. Features a custom SVG-based seat selection engine, secure Stripe integration, and automated e-ticket generation with QR codes.",
        stack: ["React 19", "Node.js", "Prisma", "MySQL", "Stripe API"],
        link: "https://github.com/agussantinelli/TicketApp-FrontEnd"
    },
    {
        title: "BuyJugador",
        description: "Comprehensive retail management system for the gaming sector. Synchronizes inventory and sales across Blazor WASM and WinForms using Repository and Unit of Work patterns.",
        stack: ["C#", ".NET 8", "Blazor WASM", "WinForms", "SQL Server"],
        link: "https://github.com/agussantinelli/ProyectoIDE-BuyJugador"
    },
    {
        title: "ImpulsaMe",
        description: "Secure community-driven crowdfunding platform. Implements a robust project lifecycle state machine and a handcrafted JDBC persistence layer for optimized performance.",
        stack: ["Java", "Jakarta EE", "MySQL", "Stripe Checkout", "Tomcat"],
        link: "https://github.com/agussantinelli/ImpulsaMe-Java"
    },
    {
        title: "EstacionAR",
        description: "Urban mobility platform transforming parking reservations. Digitalizes traditional operations through real-time geocoding and seamless regional payment integration.",
        stack: ["React Native", "Expo 54", "Node.js", "PostgreSQL", "TurboRepo"],
        link: "https://github.com/agussantinelli/EstacionAR.git",
        status: "Work in Progress"
    },
    {
        title: "Promiedos NBA",
        description: "Advanced NBA statistics platform in Spanish. Centralizes live boxscores, historical performance analytics, and franchise wikis with high-performance hybrid rendering.",
        stack: ["Astro", "Node.js", "MySQL", "TypeScript", "Astro Islands"],
        link: "https://github.com/agussantinelli/Promiedos-NBA-FrontEnd",
        status: "Work in Progress"
    }
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
                    Featured <span>Projects</span>
                </Typography>
                <Grid container spacing={4}>
                    {projects.map((project, index) => (
                        <Grid size={{ xs: 12, md: 4, lg: 4 }} key={index}>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -12 }}
                                style={{ height: '100%' }}
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
                                        position: 'relative',
                                        transition: 'all 0.4s ease',
                                        '&:hover': {
                                            borderColor: 'rgba(0, 255, 242, 0.3)',
                                            boxShadow: '0 20px 40px -20px rgba(0, 0, 0, 0.7), 0 0 20px rgba(0, 255, 242, 0.05)',
                                            '& .project-title': { color: 'var(--color-aqua)' }
                                        }
                                    }}
                                >
                                    {project.status && (
                                        <Box
                                            sx={{
                                                position: 'absolute',
                                                top: 20,
                                                right: 20,
                                                bgcolor: 'rgba(0, 255, 242, 0.1)',
                                                color: 'var(--color-aqua)',
                                                px: 1.5,
                                                py: 0.5,
                                                borderRadius: '20px',
                                                fontSize: '0.65rem',
                                                fontWeight: 800,
                                                letterSpacing: 1,
                                                border: '1px solid rgba(0, 255, 242, 0.2)',
                                                textTransform: 'uppercase',
                                                zIndex: 1
                                            }}
                                        >
                                            {project.status}
                                        </Box>
                                    )}
                                    <CardContent sx={{ flexGrow: 1, p: 4 }}>
                                        <Typography
                                            variant="h5"
                                            className="project-title"
                                            gutterBottom
                                            sx={{
                                                fontWeight: 700,
                                                color: 'var(--color-white)',
                                                transition: 'color 0.3s ease',
                                                pr: project.status ? 12 : 0
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
                                            href={project.link}
                                            target="_blank"
                                            sx={{
                                                color: 'var(--color-aqua)',
                                                textTransform: 'none',
                                                fontWeight: 700,
                                                transition: 'all 0.2s',
                                                '&:hover': {
                                                    bgcolor: 'rgba(0, 255, 242, 0.05)',
                                                    pl: 2
                                                }
                                            }}
                                        >
                                            Explore Code ↗
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
