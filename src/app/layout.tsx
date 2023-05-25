import './globals.css'
import {Roboto} from 'next/font/google'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-roboto',
})

export const metadata = {
  title: 'Otmane Omry Portfolio',
  description: 'My name is Otmane Omry I have 7 years of professional experience working for companies in Morocco, Switzerland, and France. I love clean, organized, and well structured codebases.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/assets/images/favicon.svg"/>
        <link rel="icon" type="image/png" href="/assets/images/favicon.png"/>
      </head>
      <body className={roboto.className}>{children}</body>
      </html>
  )
}
