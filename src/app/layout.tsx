import {DefaultNavbar} from "@/app/components/Navbar/Navbar";
import {DefaultFooter} from "@/app/components/Footer/Footer";
import './globals.scss'
import {Poppins} from 'next/font/google'

const poppins = Poppins({
  weight: '400',
  subsets: ['latin']
});

interface LayoutProps {
  children: React.ReactNode;
}

export default async function RootLayout({children}: LayoutProps) {
  return (
    <html lang="en" className={`${poppins.className} no-scrollbar`}>
    <body>
    <main className="flex min-h-screen flex-col items-center p-12 pb-0 main justify-between">
      <DefaultNavbar />
      {children}
      <DefaultFooter />
    </main>
    </body>
    </html>
  )
};
