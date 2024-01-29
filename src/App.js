import Blogs from './components/Blogs/Blogs';
import Featured from './components/Featured/Featured';
import Footer from './components/FootNav/Footer';
import JustFooter from './components/Footer/JustFooter';
import GreenEarth from './components/GreenEarth';
import HeaderNav from './components/Header/HeaderNav';
import Hero from './components/Hero/Hero';
import How from './components/How/How';
import Testimonial from './components/Testimonial/Testimonial';
import Things from './components/Things/Things';

function App() {
  return (
    <div className="App">
     <HeaderNav />
     <Hero />
     <How />
     <Things />
     <Featured />
     <Testimonial />
     <Blogs /> 
     <GreenEarth />
     <Footer />
     <JustFooter />
    </div>
  );
}

export default App;
