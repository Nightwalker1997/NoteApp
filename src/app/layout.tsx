import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import Providers from "@/components/provider";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Secret Note',
    description: 'This a resume project web application.',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) 
{
        return (
            <html lang="en">
                <head>
                    {/* <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" sizes='any'/> */}
                </head>
                <body className={inter.className}>
            
                    <Providers>
                    {children}
                    </Providers>
                
                </body>
            </html>
        )
}
