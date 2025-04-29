"use client";
import React from 'react'

function Contact() {
    return (
        <div><section className="py-4 bg-white mb-5 ">
            <div className="max-w-4xl mx-auto px-4">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-bold text-black mb-2">Get In Touch</h2>
                    <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
                    <p className="mt-4 text-gray-400">Have questions? Reach out to us through any of these channels.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Phone Contact */}
                    <div className="bg-black rounded-lg p-6 text-center hover:bg-gray-800 transition-colors group">
                        <div className="mb-4 flex justify-center">
                            <div className="w-16 h-16 bg-yellow-900/20 rounded-full flex items-center justify-center group-hover:bg-yellow-900/30 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 8V5z" />
                                </svg>
                            </div>
                        </div>
                        <h3 className="text-white text-lg font-medium mb-2">Call Us</h3>
                        <p className="text-gray-400 mb-3 text-sm">Available Monday-Friday, 9am-5pm</p>
                        <a href="tel:+919446014317" className="text-yellow-500 hover:underline text-sm">PH: 8590332548</a>
                    </div>

                    {/* Email Contact */}
                    <div className="bg-black rounded-lg p-6 text-center hover:bg-gray-800 transition-colors group">
                        <div className="mb-4 flex justify-center">
                            <div className="w-16 h-16 bg-yellow-900/20 rounded-full flex items-center justify-center group-hover:bg-yellow-900/30 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                        </div>
                        <h3 className="text-white text-lg font-medium mb-2">Email Us</h3>
                        <p className="text-gray-400 mb-3 text-sm">We'll respond within 24 hours</p>
                        <a href="mailto:principal@sbce.ac.in" className="text-yellow-500 hover:underline block">principal@sbce.ac.in</a>
                        {/* <a href="mailto:info@sbce.ac.in" className="text-yellow-500 hover:underline block mt-1">info@sbce.ac.in</a> */}
                    </div>

                    {/* Location */}
                    <div className="bg-black rounded-lg p-6 text-center hover:bg-gray-800 transition-colors group">
                        <div className="mb-4 flex justify-center">
                            <div className="w-16 h-16 bg-yellow-900/20 rounded-full flex items-center justify-center group-hover:bg-yellow-900/30 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                        </div>
                        <h3 className="text-white text-lg font-medium mb-2">Visit Us</h3>
                        <p className="text-gray-400 mb-3 text-sm">Our campus is open to visitors</p>
                        <a
                            href="https://maps.google.com/?q=Sree+Buddha+College+of+Engineering+Pattoor"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-yellow-500 hover:underline inline-block"
                        >
                            Pattoor, P.O, Nooranad,<br />
                            Padanilam, Kerala, 690529
                        </a>


                    </div>
                </div>
            </div>
        </section></div>
    )
}

export default Contact