import Footer from '../components/footer'
import Header from '../components/header'
import '../styles/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head />
      <body className="flex min-h-full flex-col">
        <div className="relative flex min-h-screen min-w-full flex-col items-center justify-center bg-white font-mono text-gray-700">
          <Header />
          <main className="flex w-full flex-1 flex-col items-center justify-start p-3 pt-20 md:px-5 lg:px-8 xl:px-16">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
