import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Muda Logistics',
  description: 'Transportes feitos direito ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
      />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
