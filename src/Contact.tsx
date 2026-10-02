import React, { useState } from 'react';
// import { Link } from 'react-router';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    window.location.href = `mailto:screnshaw121@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(formData.message)}`;
    // Here you would typically integrate with a service like EmailJS or a backend API
  };

  return (
    <div className="min-h-screen bg-sky-100 font-sans overflow-x-hidden">

      {/* Header Section */}
      <section className="bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 py-20 px-4 border-b-8 border-yellow-400 relative">
        <div className="max-w-5xl mx-auto text-center">
          <span className="bg-white text-purple-600 font-black tracking-widest uppercase text-sm mb-6 px-6 py-2 rounded-full shadow-md hover:transform hover:rotate-2 duration-300 inline-block">
            Let's Get in Touch!
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 drop-shadow-xl transform hover:scale-105 transition-transform duration-300">
            Contact Miss Sumer
          </h1>
          <p className="text-xl md:text-2xl text-indigo-900 font-bold mb-8 max-w-2xl mx-auto bg-white/40 p-4 rounded-3xl backdrop-blur-sm">
            Have questions about enrollment? I'd love to hear from you!
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

          {/* Left Column: Contact Info */}
          <div className="space-y-8">
            <div className="bg-white p-10 rounded-[3rem] shadow-xl border-4 border-purple-200 transform -rotate-1">
              <h2 className="text-3xl font-black text-purple-800 mb-6">Reach Out Directly 📞</h2>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-center gap-4 p-4 bg-yellow-100 rounded-2xl border-2 border-yellow-200 transform hover:translate-x-2 transition-transform">
                  <span className="text-3xl">📱</span>
                  <div>
                    <p className="text-sm font-bold text-yellow-700 uppercase">Phone</p>
                    <p className="text-xl font-black text-yellow-900">(707) 223-4600</p>
                  </div>
                </div>

                {/* Email - This is the link to default email program */}
                <a 
                  href="mailto:screnshaw121@gmail.com" 
                  className="flex items-center gap-4 p-4 bg-pink-100 rounded-2xl border-2 border-pink-200 transform hover:translate-x-2 transition-transform hover:bg-pink-200 block"
                >
                  <span className="text-3xl">✉️</span>
                  <div>
                    <p className="text-sm font-bold text-pink-700 uppercase">Email</p>
                    <p className="text-xl font-black text-pink-900">screnshaw121@gmail.com</p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4 p-4 bg-lime-100 rounded-2xl border-2 border-lime-200 transform hover:translate-x-2 transition-transform">
                  <span className="text-3xl">🏠</span>
                  <div>
                    <p className="text-sm font-bold text-lime-700 uppercase">Location</p>
                    <p className="text-xl font-black text-lime-900">5605 Rohnerville Rd, Fortuna, CA 95540</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 p-6 bg-sky-50 rounded-3xl border-2 border-dashed border-sky-300 text-center">
                <p className="text-sky-700 font-medium italic">
                  "I usually respond within 24 hours. I can't wait to meet your little one!"
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-white p-10 rounded-[3rem] shadow-xl border-4 border-pink-200 transform rotate-1">
            <h2 className="text-3xl font-black text-pink-800 mb-6">Send a Message 📝</h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-purple-800 font-black mb-2 ml-2">Your Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 rounded-full border-4 border-sky-100 focus:border-pink-300 outline-none transition-colors font-medium"
                  placeholder="Parent's Name"
                />
              </div> 

              <div>
                <label className="block text-purple-800 font-black mb-2 ml-2">Subject</label>
                <input 
                  type="text" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-6 py-4 rounded-full border-4 border-sky-100 focus:border-pink-300 outline-none transition-colors font-medium"
                  placeholder="How can I help?"
                />
              </div>

              <div>
                <label className="block text-purple-800 font-black mb-2 ml-2">Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 rounded-[2rem] border-4 border-sky-100 focus:border-pink-300 outline-none transition-colors font-medium"
                  placeholder="Tell me about your child..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-lime-400 hover:bg-lime-500 text-lime-900 border-4 border-lime-600 font-black text-xl py-4 rounded-full shadow-[0_6px_0_rgb(77,124,15)] transition-all duration-200 hover:translate-y-1 hover:shadow-[0_2px_0_rgb(77,124,15)]"
              >
                Send Message! 🚀
              </button>
            </form>
          </div>

        </div>
      </section>

    </div>
  );
}

export default Contact;