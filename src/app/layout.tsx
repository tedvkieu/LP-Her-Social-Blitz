import type { Metadata } from 'next';
import {
    Geist,
    Geist_Mono,
    Inter,
    Playfair_Display,
    Nothing_You_Could_Do,
    Barlow_Condensed,
} from 'next/font/google';
import './globals.css';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});
const nycd = Nothing_You_Could_Do({
    subsets: ['latin'],
    variable: '--font-nycd',
    weight: '400',
    display: 'swap',
});

const playfair = Playfair_Display({
    subsets: ['latin'],
    variable: '--font-playfair-display',
    display: 'swap',
});

const barlowCondensed = Barlow_Condensed({
    weight: '700',

    subsets: ['latin'],

    variable: '--font-barlow-condensed',
});

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Sue Hoang | Her Social Blitz',
    description:
        'Grow your business with clarity, confidence, and consistent clients.',
    icons: {
        icon: '/favicon-sue.ico', // hoặc .svg, .png tùy file bạn có
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${inter.variable} ${barlowCondensed.variable} ${nycd.variable} ${playfair.variable} font-inter ${geistSans.variable} ${geistMono.variable} font-lavish antialiased`}>
                {children}
            </body>
        </html>
    );
}
