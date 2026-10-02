

import { Link } from 'react-router';
import './App.css';
// import Welcome from './assets/Welcome.webp'
import smilesPhoto from './assets/SmilesPhoto.webp'

function App() {

  return (
    <div className="min-h-screen bg-sky-100 font-sans overflow-hidden">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-400 py-24 px-4 border-b-8 border-purple-500 relative">
        <div className="max-w-5xl mx-auto text-center flex flex-col items-center ">
          {/* <img src={Welcome} alt="Welcome" className="w-full h-48 object-cover object-[15%_30%] mb-6 absolute top-0" /> */}
          <span className="bg-white text-pink-600 font-black tracking-widest uppercase text-sm mb-6 px-6 py-2 rounded-full shadow-md hover:transform hover:rotate-2 duration-300">
            Welcome to
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 drop-shadow-xl transform hover:scale-105 transition-transform duration-300">
            Miss Sumer's Preschool
          </h1>
          <p className="text-2xl md:text-3xl text-purple-900 font-bold mb-12 max-w-2xl bg-white/40 p-4 rounded-3xl backdrop-blur-sm">
            Exceptional, play-based childcare and early education at an affordable price!
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <Link 
              to="/contact" 
              className="bg-lime-400 hover:bg-lime-500 text-lime-900 border-4 border-lime-600 font-black text-xl py-4 px-10 rounded-full shadow-[0_6px_0_rgb(77,124,15)] transition-all duration-200 hover:translate-y-1 hover:shadow-[0_2px_0_rgb(77,124,15)]"
            >
              Enroll Today!
            </Link>
            <Link 
              to="/about" 
              className="bg-white hover:bg-sky-50 text-sky-600 border-4 border-sky-200 hover:border-sky-400 font-black text-xl py-4 px-10 rounded-full shadow-[0_6px_0_rgb(186,230,253)] transition-all duration-200 hover:translate-y-1 hover:shadow-[0_2px_0_rgb(186,230,253)]"
            >
              Meet Sumer
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 px-4 bg-sky-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-purple-800 mb-6 transform rotate-1 inline-block">
              Why Choose Us?
            </h2>
            <div className="flex justify-center gap-2">
              <div className="w-8 h-3 bg-pink-400 rounded-full"></div>
              <div className="w-8 h-3 bg-yellow-400 rounded-full"></div>
              <div className="w-8 h-3 bg-lime-400 rounded-full"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mx-4">
            {/* Feature 1 */}
            <div className="bg-rose-100 p-8 rounded-3xl shadow-lg border-4 border-rose-300 transform hover:-translate-y-3 hover:rotate-2 transition-all duration-300">
              <div className="w-16 h-16 bg-white text-rose-500 rounded-full flex items-center justify-center text-4xl mb-6 shadow-md border-2 border-rose-200">
                🧸
              </div>
              <h3 className="text-2xl font-black text-rose-800 mb-3">Exceptional Care</h3>
              <p className="text-rose-900 font-medium text-lg leading-relaxed">
                We provide the highest quality care in a safe, nurturing, and home-like environment where little ones thrive.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-yellow-100 p-8 rounded-3xl shadow-lg border-4 border-yellow-300 transform hover:-translate-y-3 hover:-rotate-2 transition-all duration-300">
              <div className="w-16 h-16 bg-white text-yellow-500 rounded-full flex items-center justify-center text-4xl mb-6 shadow-md border-2 border-yellow-200">
                📚
              </div>
              <h3 className="text-2xl font-black text-yellow-800 mb-3">Great Education</h3>
              <p className="text-yellow-900 font-medium text-lg leading-relaxed">
                Our stimulating learning environment encourages curiosity, foundational skills, and a lifelong love of learning.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-emerald-100 p-8 rounded-3xl shadow-lg border-4 border-emerald-300 transform hover:-translate-y-3 hover:rotate-2 transition-all duration-300">
              <div className="w-16 h-16 bg-white text-emerald-500 rounded-full flex items-center justify-center text-4xl mb-6 shadow-md border-2 border-emerald-200">
                🎨
              </div>
              <h3 className="text-2xl font-black text-emerald-800 mb-3">Fun Activities</h3>
              <p className="text-emerald-900 font-medium text-lg leading-relaxed">
                From arts and crafts to outdoor play, we provide engaging, age-appropriate activities that keep minds active.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mini About Teaser */}
      <section className="py-20 px-4 bg-purple-100 border-t-8 border-t-purple-300 border-b-8 border-b-sky-300">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12 bg-white p-10 rounded-[3rem] shadow-xl border-4 border-purple-200">
          <div className="md:w-1/3 flex justify-center">
            <img 
              src={smilesPhoto} 
              alt="Smiling children" 
              className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover object-[0%_0%] border-8 border-white shadow-xl transform -rotate-3 hover:rotate-3 transition-transform duration-300"
            />
          </div>
          <div className="md:w-2/3 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-black text-purple-800 mb-4">Trusted by Parents for 30+ Years!</h2>
            <p className="text-purple-600 text-lg font-medium mb-6 leading-relaxed">
              With decades of experience and specialized preschool training, I treat every child with the exact same care, patience, and attention I want for my own.
            </p>
            <Link 
              to="/about" 
              className="text-pink-600 font-black text-xl hover:text-pink-500 inline-flex items-center gap-2 bg-pink-100 px-6 py-2 rounded-full hover:bg-pink-200 transition-colors"
            >
              Learn more about Sumer <span>&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 text-center bg-sky-400">
        <h2 className="text-4xl font-black text-white mb-8 drop-shadow-md">Ready to join our monkey family? 🍌</h2>
        <Link 
          to="/contact" 
          className="inline-block bg-white text-sky-600 border-4 border-sky-600 font-black text-2xl py-5 px-12 rounded-full shadow-[0_8px_0_rgb(2,132,199)] transition-all duration-200 hover:translate-y-1 hover:shadow-[0_4px_0_rgb(2,132,199)]"
        >
          Contact Me Today!
        </Link>
      </section>

    </div>
  );
}

export default App;