'use client'
import './globals.css'
import React from 'react'
import { Inter } from 'next/font/google'
import { MantineProvider } from '@mantine/core'


const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: 'light',
          main_dark:'#004445',
          secondary_dark:'#2C7873',
          main_light:'#FFD800',
          secondary_light:'#6FB98F',
          optional_light:'#FFED00',
          white_cream:'#FBFAE1'
        }}
      >
      
      {children}
      </MantineProvider>
      </body>
    </html>
  )
}
