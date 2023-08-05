'use client'
import { MantineProvider } from '@mantine/core'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/common/Footer'
import Navbar from '@/components/common/Navbar'


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
      <Navbar />
      {children}
      <Footer/>
      </MantineProvider>
      </body>
    </html>
  )
}
