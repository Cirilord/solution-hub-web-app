'use client'
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import { ReactNode } from 'react'

export type ProvidersProps = {
    children: ReactNode
}

export function Providers(props: ProvidersProps) {

    const { children } = props

    return (
        <CacheProvider>
            <ChakraProvider>{children}</ChakraProvider>
        </CacheProvider>
    )
}