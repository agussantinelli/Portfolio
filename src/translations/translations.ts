export const translations = {
    en: {
        nav: {
            home: 'Home',
            skills: 'Skills',
            projects: 'Projects',
            contact: 'Contact',
            resume: 'Resume',
            resumeUrl: '/Portfolio/cv-en.pdf'
        },
        hero: {
            greeting: 'Hi, my name is',
            name: 'Agustín Santinelli',
            role: 'Information Systems Engineering Student.',
            description: 'Passionate about software engineering, clean architectures, and data-driven applications. Specializing in transforming complex business requirements into scalable, mission-critical software. Based in Rosario, Argentina.',
            cta: 'View Projects',
            contactButton: 'Get In Touch'
        },
        skills: {
            title: 'Skills',
            subtitle: 'Technologies'
        },
        projects: {
            title: 'Featured',
            titleHighlight: 'Projects',
            explore: 'Explore Code',
            wip: 'Work in Progress',
            descriptions: {
                finanzapp: 'The definitive wealth dashboard for the Argentine investor. Consolidates assets (Crypto, stocks, CEDEARs, bonds) with real-time ARS/USD valuation, integrating AI for intelligent financial data parsing.',
                sysacad: 'High-scale reengineering of the legacy UTN academic portal. Eliminates bureaucratic friction through a reactive architecture managing complex academic rules and peak concurrency.',
                ticketapp: 'High-end marketplace for event ticketing. Features a custom SVG-based seat selection engine, secure Stripe integration, and automated e-ticket generation with QR codes.',
                buyjugador: 'Comprehensive retail management system for the gaming sector. Synchronizes inventory and sales across Blazor WASM and WinForms using Repository and Unit of Work patterns.',
                impulsame: 'Secure community-driven crowdfunding platform. Implements a robust project lifecycle state machine and a handcrafted JDBC persistence layer for optimized performance.',
                estacionar: 'Urban mobility platform transforming parking reservations. Digitalizes traditional operations through real-time geocoding and seamless regional payment integration.',
                promiedos: 'Advanced NBA statistics platform in Spanish. Centralizes live boxscores, historical performance analytics, and franchise wikis with high-performance hybrid rendering.',
                marketflex: 'Adaptive E-commerce & Marketplace Ecosystem. A high-performance core designed for modular metamorphosis, adapting to diverse business models without rewriting core logic. Features context-aware behavior and polymorphic UI components.'
            }
        },
        contact: {
            overline: 'What\'s Next?',
            title: 'Get In Touch.',
            description: 'I\'m currently looking for new opportunities and my inbox is always open. Whether you have a question, a project idea, or just want to say hi, I\'ll try my best to get back to you!',
            button: 'Say Hello'
        },
        footer: {
            credit: 'Designed & Built by Agustín Santinelli',
            tech: 'Built with Next.js & MUI'
        }
    },
    es: {
        nav: {
            home: 'Inicio',
            skills: 'Habilidades',
            projects: 'Proyectos',
            contact: 'Contacto',
            resume: 'Currículum',
            resumeUrl: '/Portfolio/cv-es.pdf'
        },
        hero: {
            greeting: 'Hola, mi nombre es',
            name: 'Agustín Santinelli',
            role: 'Estudiante de Ingeniería en Sistemas de Información.',
            description: 'Apasionado por la ingeniería de software, arquitecturas limpias y aplicaciones basadas en datos. Especializado en transformar requisitos de negocio complejos en software escalable y de misión crítica. Con base en Rosario, Argentina.',
            cta: 'Ver Proyectos',
            contactButton: 'Contactame'
        },
        skills: {
            title: 'Habilidades',
            subtitle: 'Tecnologías'
        },
        projects: {
            title: 'Proyectos',
            titleHighlight: 'Destacados',
            explore: 'Ver Código',
            wip: 'En Desarrollo',
            descriptions: {
                finanzapp: 'El dashboard definitivo de patrimonio para el inversor argentino. Consolida activos (Crypto, acciones, CEDEARs, bonos) con valuación en tiempo real ARS/USD, integrando IA para parsing inteligente de datos financieros.',
                sysacad: 'Reingeniería a gran escala del portal académico legacy de la UTN. Elimina fricciones burocráticas mediante una arquitectura reactiva que gestiona reglas académicas complejas y concurrencia pico.',
                ticketapp: 'Marketplace de alta gama para ticketing de eventos. Incluye motor personalizado de selección de asientos SVG, integración segura con Stripe y generación automática de e-tickets con códigos QR.',
                buyjugador: 'Sistema integral de gestión retail para el sector gaming. Sincroniza inventario y ventas entre Blazor WASM y WinForms usando patrones Repository y Unit of Work.',
                impulsame: 'Plataforma segura de crowdfunding impulsada por la comunidad. Implementa una máquina de estados robusta del ciclo de vida de proyectos y una capa de persistencia JDBC artesanal para rendimiento optimizado.',
                estacionar: 'Plataforma de movilidad urbana que transforma las reservas de estacionamiento. Digitaliza operaciones tradicionales mediante geocodificación en tiempo real e integración de pagos regionales.',
                promiedos: 'Plataforma avanzada de estadísticas NBA en español. Centralizar boxscores en vivo, análisis de rendimiento histórico y wikis de franquicias con rendering híbrido de alto rendimiento.',
                marketflex: 'Ecosistema Adaptable de E-commerce y Marketplace. Núcleo de alto rendimiento diseñado para la metamorfosis modular, adaptándose a diversos modelos de negocio sin reescribir la lógica central. Incluye componentes UI polimórficos.'
            }
        },
        contact: {
            overline: '¿Qué Sigue?',
            title: 'Contactame.',
            description: 'Actualmente estoy buscando nuevas oportunidades y mi bandeja de entrada siempre está abierta. Ya sea que tengas una pregunta, una idea de proyecto, o solo quieras saludar, ¡haré mi mejor esfuerzo para responderte!',
            button: 'Di Hola'
        },
        footer: {
            credit: 'Diseñado y Construido por Agustín Santinelli',
            tech: 'Construido con Next.js y MUI'
        }
    }
};

export type Language = 'en' | 'es';
export type Translations = typeof translations.en;
