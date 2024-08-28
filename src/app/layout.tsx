import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'
import { Providers } from './providers'

export type RootLayoutProps = {
    children: ReactNode
}

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Solutions HUB',
    // description: 'Generated by create next app'
}

export default function RootLayout(props: RootLayoutProps) {

    const { children } = props

    return (
        <html lang='en'>
            <body className={inter.className}>
                <Providers>{children}</Providers>
            </body>
        </html>
    )
}