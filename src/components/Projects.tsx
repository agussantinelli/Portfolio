'use client';
import React from 'react';
import { Box, Container, Typography, Card, CardContent, CardActions, Button, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import './styles/Projects.css';

const projects = [
    {
        title: "FinanzApp",
        descriptionKey: "finanzapp" as const,
        description: "The definitive wealth dashboard for the Argentine investor. Consolidates assets (Crypto, stocks, CEDEARs, bonds) with real-time ARS/USD valuation, integrating AI for intelligent financial data parsing.",
        stack: ["Next.js 16", "ASP.NET Core 9", "EF Core", "Material UI", "OpenRouter API"],
        link: "https://github.com/agussantinelli/FinanzApp-FrontEnd"
    },
    {
        title: "Sysacad Next",
        descriptionKey: "sysacad" as const,
        description: "High-scale reengineering of the legacy UTN academic portal. Eliminates bureaucratic friction through a reactive architecture managing complex academic rules and peak concurrency.",
        stack: ["Angular 19", "Spring Boot 3.5", "Java 21", "Hibernate", "Angular Material"],
        link: "https://github.com/agussantinelli/Sysacad-Next-FrontEnd"
    },
    {
        title: "TicketApp",
        descriptionKey: "ticketapp" as const,
        description: "High-end marketplace for event ticketing. Features a custom SVG-based seat selection engine, secure Stripe integration, and automated e-ticket generation with QR codes.",
        stack: ["React 19", "Node.js", "Express", "Prisma", "Stripe API"],
        link: "https://github.com/agussantinelli/TicketApp-FrontEnd"
    },
    {
        title: "BuyJugador",
        descriptionKey: "buyjugador" as const,
        description: "Comprehensive retail management system for the gaming sector. Synchronizes inventory and sales across Blazor WASM and WinForms using Repository and Unit of Work patterns.",
        stack: ["C#", ".NET 8", "Blazor WASM", "WinForms", "SQL Server"],
        link: "https://github.com/agussantinelli/ProyectoIDE-BuyJugador"
    },
    {
        title: "ImpulsaMe",
        descriptionKey: "impulsame" as const,
        description: "Secure community-driven crowdfunding platform. Implements a robust project lifecycle state machine and a handcrafted JDBC persistence layer for optimized performance.",
        stack: ["Java", "Jakarta EE", "JSP", "Stripe API", "Apache Tomcat"],
        link: "https://github.com/agussantinelli/ImpulsaMe-Java"
    },
    {
        title: "EstacionAR",
        descriptionKey: "estacionar" as const,
        description: "Urban mobility platform transforming parking reservations. Digitalizes traditional operations through real-time geocoding and seamless regional payment integration.",
        stack: ["React Native", "Node.js", "OpenStreetMap API", "Docker", "Expo"],
        link: "https://github.com/agussantinelli/EstacionAR.git",
        status: "Work in Progress"
    },
    {
        title: "MarketFlex",
        descriptionKey: "marketflex" as const,
        description: "Adaptive E-commerce & Marketplace Ecosystem. A modular core engineered for metamorphosis, adapting to diverse business models without rewriting logic.",
        stack: ["Astro 5", "Hono", "PostgreSQL", "Drizzle ORM", "Node.js 20"],
        link: "https://github.com/agussantinelli/MarketFlex-FrontEnd",
        status: "Work in Progress"
    },
    {
        title: "Promiedos NBA",
        descriptionKey: "promiedos" as const,
        description: "Advanced NBA statistics platform in Spanish. Centralizes live boxscores, historical performance analytics, and franchise wikis with high-performance hybrid rendering.",
        stack: ["Vue.js", "Node.js", "Express", "TypeScript", "MySQL"],
        link: "https://github.com/agussantinelli/Promiedos-NBA-FrontEnd",
        status: "Work in Progress"
    }
];

export default function Projects() {
    const { language, t } = useLanguage();

    return (
        <Box component="section" id="projects" className="projects-section">
            <Container maxWidth="lg">
                <Typography
                    variant="h3"
                    className="projects-title"
                >
                    {t.projects.title} <span>{t.projects.titleHighlight}</span>
                </Typography>

                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: 3,
                        justifyContent: 'center',
                        width: '100%',
                    }}
                >
                    {projects.map((project, index) => (
                        <React.Fragment key={index}>
                            <Box
                                sx={{
                                    flex: {
                                        xs: '1 1 100%',           // Móvil: 1 por fila
                                        sm: '1 1 calc(50% - 12px)',  // Tablet: 2 por fila
                                        md: '0 1 calc(33.333% - 16px)', // Desktop: 3 por fila
                                    },
                                    maxWidth: {
                                        xs: '100%',
                                        sm: 'calc(50% - 12px)',
                                        md: 'calc(33.333% - 16px)',
                                    },
                                    minWidth: {
                                        xs: '100%',
                                        sm: 'calc(50% - 12px)',
                                        md: 'calc(33.333% - 16px)',
                                    },
                                }}
                            >
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    style={{ display: 'flex', width: '100%' }}
                                >
                                    <Card
                                        elevation={0}
                                        className="project-card"
                                    >
                                        <CardContent sx={{ flexGrow: 1, p: 3, pb: 1 }}>
                                            <Typography
                                                variant="h5"
                                                className="project-card-title"
                                            >
                                                {project.title}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                className="project-card-desc"
                                            >
                                                {language === 'en' ? project.description : t.projects.descriptions[project.descriptionKey]}
                                            </Typography>
                                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.8 }}>
                                                {project.stack.map((tech) => (
                                                    <Chip
                                                        key={tech}
                                                        label={tech}
                                                        size="small"
                                                        className="tech-chip"
                                                    />
                                                ))}
                                            </Box>
                                        </CardContent>
                                        {project.status && (
                                            <Box className="wip-badge">
                                                {t.projects.wip}
                                            </Box>
                                        )}
                                        <CardActions sx={{ p: 3, pt: 2 }}>
                                            <Button
                                                disableRipple
                                                href={project.link}
                                                target="_blank"
                                                className="btn-explore"
                                            >
                                                {t.projects.explore} <span className="arrow">↗</span>
                                            </Button>
                                        </CardActions>
                                    </Card>
                                </motion.div>
                            </Box>

                            {index === 2 && (
                                <Box sx={{ flexBasis: '100%', height: 0, display: { xs: 'none', md: 'block' } }} />
                            )}

                            {index === 4 && (
                                <Box sx={{ flexBasis: '100%', height: 0, display: { xs: 'none', md: 'block' } }} />
                            )}
                        </React.Fragment>
                    ))}
                </Box>
            </Container>
        </Box>
    );
}
