import Image from 'next/image'
import Footer from '../components/footer'
import Header from '../components/header'
import '../styles/globals.css'
import Styles from './layout.module.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head />
      <body className="flex min-h-full flex-col">
        <div className="relative flex min-h-screen min-w-full flex-col items-center justify-center font-mono text-gray-700">
          <Header />
          <div className="relative mb-12 h-48 min-w-full overflow-y-hidden md:min-h-[60vh]">
            <Image
              alt="main-visual"
              src={'/images/main-visual.jpg'}
              className={Styles.mainVisualBackground}
              quality={30}
              fill
            />
            <div className="absolute z-10 flex h-full w-full items-center justify-center">
              <p className="w-1/2 border-b border-white px-6 py-2 text-center text-xs tracking-[0.5rem] text-white md:w-auto md:text-xl md:tracking-[1rem]">
                プログラミングやガジェット紹介など
              </p>
            </div>
          </div>
          <main className="flex w-full flex-1 flex-col items-center justify-start p-3 md:px-5 lg:px-8 xl:px-16">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
