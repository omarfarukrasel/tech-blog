import './globals.css'

export const metadata = {
  title: 'TechBlog - Your Source for Tech Insights',
  description: 'A modern tech blog built with Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}