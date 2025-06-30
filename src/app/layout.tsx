import type { Metadata } from 'next';
import './global.css';
import AuthContext from '@/context/AuthContext';

export const metadata: Metadata = {
    title: '캘린더',
    description: '캘린더',
    icons: {
        icon: '/favicon.ico',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko">
            <body>
                <AuthContext>{children}</AuthContext>
            </body>
        </html>
    );
}
