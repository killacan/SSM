// import './Tailwind.css'

// function About() {

//     return (
//         <div className="p-4 max-w-3xl mx-auto">
//             <h1 className="text-3xl font-bold mb-4 text-center">About Me!</h1>
//             <p>For over 30 years, I have had the joy of working with young children, and for the past 13 years, I have focused my career on providing preschool education. I genuinely love being part of these early, formative stages of a child's learning journey—there is nothing quite like watching a curious mind begin to explore the world.</p>
//             <p>My educational background includes 25 units of Early Childhood Education coursework, completed both online and at College of the Redwoods. Beyond my formal studies, I have continued to grow professionally by attending workshops and training programs throughout my career, always looking for new ways to better support the children in my care.</p>
//             <p>I am especially excited to work with preschool-aged children, helping them build confidence, curiosity, and a love of learning that will serve them well as they grow. As a mother of three, I understand firsthand the trust parents place in a caregiver, and I treat every child with the same care, patience, and attention I would want for my own.</p>
//             <p>I am certified in First Aid and CPR, and references are available upon request. I look forward to being part of your child's early learning journey.</p>
//         </div>
//     )
// }

// export default About

import NLink from './components/NLink'
import './Tailwind.css'
import Sumer_photo from './assets/Sumer_photo.webp'

function About() {
    return (
        <div className="min-h-screen bg-sky-50 py-12 px-4 font-sans text-slate-800">
            <div className="max-w-4xl mx-auto overflow-hidden rounded-3xl shadow-2xl border-4 border-purple-300">
                <div className="md:flex items-center p-8 md:p-12 gap-12 bg-gradient-to-br from-yellow-300 via-orange-200 to-pink-300">
                    <div className="md:w-1/3 flex justify-center">
                        <img 
                            src={Sumer_photo} 
                            alt="Profile" 
                            className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-8 border-white shadow-xl transform -rotate-3 hover:rotate-3 transition-transform duration-300"
                        />
                    </div>
                    <div className="md:w-2/3 text-center md:text-left mt-6 md:mt-0">
                        <h1 className="text-4xl md:text-5xl font-black text-purple-900 mb-2 drop-shadow-sm">Hi, I'm Sumer!</h1>
                        <p className="text-2xl text-rose-600 font-bold mb-4 bg-white inline-block px-4 py-1 rounded-full shadow-sm hover:transform hover:rotate-2 duration-300">Early Childhood Educator</p>
                        <p className="text-purple-900 font-medium text-lg leading-relaxed mt-2">
                            With over 30 years of experience, I dedicate my life to fostering 
                            curiosity and confidence in young learners during their most formative years.
                        </p>
                    </div>
                </div>

                {/* Main Content */}
                <div className="p-8 md:p-12 grid md:grid-cols-3 gap-12 bg-white">

                    {/* Bio Column */}
                    <div className="md:col-span-2 space-y-8 text-slate-700 leading-relaxed text-lg">
                        <section>
                            <h2 className="text-3xl font-bold text-sky-600 mb-4 flex items-center gap-2">
                                <span>🌟</span> My Philosophy
                            </h2>
                            <p className="bg-sky-50 p-6 rounded-2xl border-2 border-sky-200 shadow-inner">
                                For over 30 years, I have had the joy of working with young children. 
                                For the past 13 years, I have focused my career specifically on preschool education. 
                                There is nothing quite like watching a curious mind begin to explore the world, 
                                and I feel privileged to guide them through those early, formative stages.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-3xl font-bold text-emerald-500 mb-4 flex items-center gap-2">
                                <span>💖</span> A Personal Touch
                            </h2>
                            <p className="bg-emerald-50 p-6 rounded-2xl border-2 border-emerald-200 shadow-inner">
                                As a mother of three, I understand firsthand the trust parents place in a caregiver. 
                                I treat every child with the same care, patience, and attention I would want for my own, 
                                ensuring they feel safe and loved while they learn.
                            </p>
                        </section>
                    </div>

                    {/* Sidebar / Quick Facts */}
                    <div className="bg-lime-200 p-6 rounded-3xl border-4 border-lime-400 shadow-md space-y-6 transform hover:-translate-y-1 transition-transform">
                        <div>
                            <h3 className="font-black text-lime-900 uppercase text-lg tracking-wider mb-4 border-b-2 border-lime-400 pb-2">Qualifications</h3>
                            <ul className="space-y-4 text-lime-900 font-semibold">
                                <li className="flex items-start gap-3 bg-white/50 p-2 rounded-lg">
                                    <span className="text-2xl leading-none">🎓</span> 25 ECE Units (College of the Redwoods)
                                </li>
                                <li className="flex items-start gap-3 bg-white/50 p-2 rounded-lg">
                                    <span className="text-2xl leading-none">⛑️</span> First Aid & CPR Certified
                                </li>
                                <li className="flex items-start gap-3 bg-white/50 p-2 rounded-lg">
                                    <span className="text-2xl leading-none">⭐</span> 30+ Years Experience
                                </li>
                                <li className="flex items-start gap-3 bg-white/50 p-2 rounded-lg">
                                    <span className="text-2xl leading-none">📚</span> Continuous Training
                                </li>
                            </ul>
                        </div>

                        <div className="pt-6 border-t-4 border-lime-300 flex flex-col gap-4">
                            <p className="text-sm text-lime-800 mb-2 italic text-center font-bold">
                                "References available upon request!"
                            </p>
                            
                            <div className="transform hover:scale-105 transition-transform text-center">
                                <NLink to="/contact" text="Contact Me" color="yellow" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About

// import './Tailwind.css'

// function About() {
//   return (
//     <section className="max-w-3xl mx-auto px-4 py-10 sm:py-14">
//       <h1 className="text-3xl sm:text-4xl font-bold text-center mb-2">
//         About Me
//       </h1>
//       <p className="text-center text-gray-500 mb-10">
//         Preschool educator · 30+ years with young children
//       </p>

//       {/* Quick-glance highlights */}
//       <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 text-center">
//         <li className="rounded-lg bg-amber-50 p-4">
//           <span className="block text-2xl font-bold text-amber-700">30+</span>
//           <span className="text-sm text-gray-700">years with young children</span>
//         </li>
//         <li className="rounded-lg bg-amber-50 p-4">
//           <span className="block text-2xl font-bold text-amber-700">13</span>
//           <span className="text-sm text-gray-700">years in preschool education</span>
//         </li>
//         <li className="rounded-lg bg-amber-50 p-4">
//           <span className="block text-2xl font-bold text-amber-700">CPR</span>
//           <span className="text-sm text-gray-700">and First Aid certified</span>
//         </li>
//       </ul>

//       <div className="space-y-5 text-lg leading-relaxed text-gray-800">
//         <p>
//           For over 30 years, I have had the joy of working with young children,
//           and for the past 13 years, I have focused my career on preschool
//           education. I love being part of these early, formative stages of a
//           child's learning journey. There is nothing quite like watching a
//           curious mind begin to explore the world.
//         </p>

//         <p>
//           My education includes 25 units of Early Childhood Education
//           coursework, completed both online and at College of the Redwoods.
//           Beyond my formal studies, I have continued to grow by attending
//           workshops and training programs throughout my career, always looking
//           for new ways to better support the children in my care.
//         </p>

//         <p>
//           I am especially excited to work with preschool-aged children, helping
//           them build confidence, curiosity, and a love of learning that will
//           serve them well as they grow. As a mother of three, I understand
//           firsthand the trust parents place in a caregiver, and I treat every
//           child with the same care, patience, and attention I would want for my
//           own.
//         </p>

//         <p>
//           I am certified in First Aid and CPR, and references are available upon
//           request.
//         </p>
//       </div>

//       {/* Call to action */}
//       <div className="mt-10 rounded-lg bg-amber-50 p-6 text-center">
//         <p className="text-lg font-medium mb-4">
//           I look forward to being part of your child's early learning journey.
//         </p>
//         <a
//           href="/contact"
//           className="inline-block rounded-full bg-amber-600 px-6 py-2 font-semibold text-white hover:bg-amber-700 transition-colors"
//         >
//           Get in Touch
//         </a>
//       </div>
//     </section>
//   )
// }

// export default About