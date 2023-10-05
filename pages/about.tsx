import { Navbar } from "@/app/components/navbar";
import { Footer } from "@/app/components/footer";
import '../src/app/globals.css';

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar />
      <div>
        About me
      </div>
      <Footer />
    </main>
  )
}
