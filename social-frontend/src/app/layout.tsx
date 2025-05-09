import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import '../../public/styles/globals.css';
import '../../public/styles/font.css';

const rubik = Rubik({
    variable: '--font-rubik-sans',
    subsets: ['latin', 'cyrillic'],
});

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={`${rubik.variable}`}>{children}</body>
        </html>
    );
}
