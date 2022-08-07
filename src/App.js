import  React, {Suspense}  from "react";
import './App.css';
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
const Clients = React.lazy(() => import("./components/Clients/Clients"))
const Projects = React.lazy(() => import("./components/Projects/Projects"))
const About = React.lazy(() => import("./components/About/About"))
const Subscribe = React.lazy(() => import("./components/Subscribe/Subscribe"))


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero id="inicio"/>
      <Suspense>
          <About id="nosotros"/>
          <Projects id="proyectos"/>
          <Clients id="clientes"/>
          <Subscribe id="contacto"/>
      </Suspense> 
      <Footer/>
    </div>
  );
}

export default App;
