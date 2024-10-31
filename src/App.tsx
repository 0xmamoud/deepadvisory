import { Hero } from '@/components/hero'
import { Footer } from './components/footer'
import { Header } from "@/components/header"
import { About } from '@/components/about'
import { Services } from '@/components/services'
import { Cta } from '@/components/cta'

function App() {

  return (
    <main className="min-h-screen bg-dark-blue font-poppins relative ">

      <section className="fixed top-0 z-50 w-full border-b 
        border-separator bg-dark-blue/80 backdrop-blur-md"
      >
        <Header />
      </section>
      <section className='max-container'>
        <Hero />
      </section>
      <section className="border-t border-separator bg-dark-blue py-16 sm:py-24" >
        <About />
      </section>
      <section className="relative border-t border-separator  
        bg-dark-blue py-16 sm:py-24"
      >
        <Services />
      </section>
      <Cta />
      <section className="border-t border-separator bg-dark-blue">
        <Footer />
      </section>
    </main>
  )
}

export default App
