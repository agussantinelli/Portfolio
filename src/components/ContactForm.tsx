'use client';
import React, { useState, useRef } from 'react';
import { Box, TextField, Button, Typography, Alert, Fade } from '@mui/material';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { useLanguage } from '@/context/LanguageContext';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';

export default function ContactForm() {
    const { t } = useLanguage();
    const form = useRef<HTMLFormElement>(null);
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
    const [errors, setErrors] = useState<{ [key: string]: boolean }>({});

    const validateForm = () => {
        if (!form.current) return false;
        const formData = new FormData(form.current);
        const newErrors: { [key: string]: boolean } = {};
        
        ['user_name', 'user_email', 'message'].forEach(field => {
            if (!formData.get(field)) newErrors[field] = true;
        });

        const email = formData.get('user_email') as string;
        if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            newErrors['user_email'] = true;
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateForm()) return;

        setStatus('sending');

        // Note: These IDs should be replaced by the USER in production
        // They are placeholders that will fail but allow the UI to work
        emailjs.sendForm(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '', 
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '', 
            form.current!, 
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
        )
        .then(() => {
            setStatus('success');
            form.current?.reset();
        }, (error) => {
            console.error('EmailJS Error:', error);
            setStatus('error');
        });
    };

    if (status === 'success') {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="contact-success-view"
            >
                <CheckCircle2 size={64} color="var(--color-blue-primary)" strokeWidth={1.5} />
                <Typography variant="h4" sx={{ mt: 3, mb: 2, fontWeight: 700, color: 'var(--color-white)' }}>
                    {t.contact.form.success.split('!')[0]}!
                </Typography>
                <Typography variant="body1" sx={{ mb: 4, color: 'var(--color-slate)' }}>
                    {t.contact.form.success.split('!')[1] || 'Your message has been delivered. I will get back to you soon.'}
                </Typography>
                <Button 
                    variant="outlined" 
                    onClick={() => setStatus('idle')}
                    className="btn-back"
                >
                    Back to Form
                </Button>
            </motion.div>
        );
    }

    return (
        <Box component="form" ref={form} onSubmit={sendEmail} sx={{ mt: 4, width: '100%', position: 'relative' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <Box sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
                    <TextField
                        fullWidth
                        id="contact-name"
                        name="user_name"
                        label={t.contact.form.name}
                        variant="outlined"
                        error={errors.user_name}
                        className="contact-input"
                    />
                    <TextField
                        fullWidth
                        id="contact-email"
                        name="user_email"
                        label={t.contact.form.email}
                        variant="outlined"
                        error={errors.user_email}
                        className="contact-input"
                    />
                </Box>
                <TextField
                    fullWidth
                    id="contact-subject"
                    name="subject"
                    label={t.contact.form.subject}
                    variant="outlined"
                    className="contact-input"
                />
                <TextField
                    fullWidth
                    id="contact-message"
                    name="message"
                    label={t.contact.form.message}
                    multiline
                    rows={4}
                    variant="outlined"
                    error={errors.message}
                    className="contact-input"
                />

                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, mt: 2 }}>
                    <Button
                        type="submit"
                        variant="outlined"
                        size="large"
                        disabled={status === 'sending'}
                        className="btn-send-message"
                        endIcon={status === 'sending' ? null : <Send size={18} />}
                        sx={{ minWidth: 200 }}
                    >
                        {status === 'sending' ? t.contact.form.sending : t.contact.form.send}
                    </Button>

                    <Fade in={status === 'error'}>
                <Box sx={{ width: '100%', maxWidth: 400 }}>
                    <Alert 
                        icon={<AlertCircle size={20} />} 
                        severity="error"
                        className="contact-alert"
                    >
                        {t.contact.form.error}
                    </Alert>
                </Box>
                    </Fade>
                </Box>
            </Box>
        </Box>
    );
}
