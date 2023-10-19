import DefaultNavbar from "@/app/components/Navbar/navbar";
import { Footer } from "@/app/components/Footer/footer";
import './globals.scss'

interface LayoutProps {
  children: React.ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24 main">
        <DefaultNavbar />
        {children}
        <Footer />
      </main>
    </>
  )
}