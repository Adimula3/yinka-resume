
import './App.css';
import Header from "./pages/header";
import About from "./pages/about";
import Services from "./pages/services";
import Contact from "./pages/contact";
import Footer from "./pages/footer";
import Works from "./pages/works";

function App() {
  return (
    <div className="App" style={{background: 'f2f4ef'}}>
       <Header />
        <Works />
        <About />
        <Services />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
