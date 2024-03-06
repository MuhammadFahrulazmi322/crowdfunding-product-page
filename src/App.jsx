import About from "./sections/About"
import Features from "./sections/Features"
import Hero from "./sections/Hero"
import Nav from "./sections/Nav"
import Product from "./sections/Product"

function App() {

  return (
    <main className="pb-20">
      <Nav />
      <Hero/>
      <div className="w-4/5 m-auto max-container">
      <Product/>
      <About/>
      <Features/>
      </div>
      
      <section>

      </section>
    </main>
  )
}

export default App
