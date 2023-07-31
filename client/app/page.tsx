// import Image from 'next/image'
// import Link from 'next/link'
// import Navbar from './components/Navbar'
// import Hero from './components/Hero'
// import Features from './components/Features'
// import Testimonial from './components/Testimonial'
// import Footer from './components/Footer'

// export default function Home() {
//     return (
//       <div>
//           <Navbar />
//           <Hero />
//           <Features />
//           <Testimonial />
//           <Footer />
//       </div>
        
//     )
// }

import { useSelector } from 'react-redux';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';

export default function Home() {
  // You can use useSelector to access the Redux state here if needed

  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Testimonial />
      <Footer data-aos="fade-down" />
    </div>
  );
}
