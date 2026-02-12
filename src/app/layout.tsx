import type { Metadata } from "next";
import { GeistPixelSquare } from "geist/font/pixel";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/theme';
import { LanguageProvider } from '@/context/LanguageContext';
import "./globals.css";

export const metadata: Metadata = {
  title: "Agus Santinelli | Software Engineering Portfolio",
  description: "Software engineering student and developer specialized in high-performance, scalable systems.",
  icons: {
    icon: '/portafolio.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${GeistPixelSquare.variable}`}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <LanguageProvider>
              {children}
            </LanguageProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
