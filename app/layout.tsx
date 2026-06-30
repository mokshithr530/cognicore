import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ChatAI from '../components/ChatAI'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        

        <Navbar />

        <main className="min-h-screen">
          {children}
        </main>
        <ChatAI/>
        

        <Footer />

      </body>
    </html>
  )
}