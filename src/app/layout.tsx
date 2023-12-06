import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
import './globals.css'

//theme and Auth-session provider
import Providers from "@/components/provider";

//fontawsome is here
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    // title: 'Secret Note',
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
                    <title> Note App</title>
                </head>
                <body 
                    // className={inter.className}
                >
            
                    <Providers>
                    {children}
                    </Providers>
                
                </body>
            </html>
        )
}
