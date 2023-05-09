import Link from 'next/link'
import '../globals.css'

export const metadata = {
  title: 'Hazels Website',
  description: 'My Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='max-w-3xl mx-auto py-10'>
        <header>
          <Link href='/'
          className='bg-gradient-to-r from-blue-400 via-teal-500 to-green-600 bg-clip-text text-transparent text-lg font-bold'
          >Hazel</Link>
        </header>
        <main className='py-20'>{children}</main>
        </body>
    </html>
  )
}
