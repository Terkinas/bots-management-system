import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import React from 'react'

type Props = {
    children: React.ReactNode
}

function RootLayout({children}: Props) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  )
}

export default RootLayout