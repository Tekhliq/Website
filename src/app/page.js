"use client";
import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import ContactForm from "./components/ContactForm";

export default function Component() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative flex flex-col min-h-[100dvh]">
      <header className="absolute top-0 w-full px-4 lg:px-6 h-14 flex items-center justify-between z-10">
        <Link className="flex items-center justify-center gap-3" href="#">
          <h3 className="text-2xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-600">
            TL
          </h3>
          <p>Tekhliq Labs</p>
          <span className="sr-only">AI Consulting</span>
        </Link>
        <div className="ml-auto flex items-center">
          <button
            className="lg:hidden flex items-center justify-center p-2 rounded-md text-white hover:text-gray-100 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
            </svg>
          </button>
          <nav className={`lg:flex gap-4 sm:gap-6 ${isMobileMenuOpen ? "absolute top-10 right-10 w-3/6 h-28 bg-[#1F2937] shadow-lg py-4 flex flex-col items-center justify-around rounded-md" : "hidden"} lg:block`}>
            <Link className="text-sm font-medium hover:underline underline-offset-4 cursor-pointer" href="#services">
              Services
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#contact">
              Contact
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
      <section id="particles-js" className="mt-[50px]"></section>
      <section className="relative top-0 w-full min-h-screen md:min-h-screen py-12 md:py-0 lg:py-32 xl:py-48 mt-[-50px] md:mt-[-680px]">
        <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2 mb-4">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tighter">
                  Unlock the Power of
                </h1>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tighter">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-600">
                    LLM Applications
                  </span>{" "}
                  with
                </h1>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tighter">
                  Tekhliq Labs
                </h1>
                <p className="mx-auto max-w-[90%] sm:max-w-[700px] text-gray-500 text-base sm:text-lg md:text-xl dark:text-gray-400">
                  Helping Businesses Realize Value from AI
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    className="bg-gradient-to-r from-purple-500 to-indigo-600 inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-200 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    href="#contact"
                  >
                    Learn More
                  </Link>
                </div>
            </div>
          </div>
        </section>
        <section id="services" className="w-full bg-gray-100 dark:bg-gray-800 py-10">
        <div className="container px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
            <div className="flex flex-col justify-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Rapid Prototyping</h2>
              <p className="text-gray-500 text-base sm:text-lg dark:text-gray-400">
                We help businesses realize the value of AI.{" "}
                <span className="underline decoration-purple-600">
                  Our Proof of Concept (POC) is delivered within a month,
                </span>{" "}
                focusing on practical and scalable solutions.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    className="bg-gradient-to-r from-purple-500 to-indigo-600 inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-200 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    href="#contact"
                  >
                    Learn More
                  </Link>
                </div>
            </div>
            <img
              alt="AI Consulting"
              className="mx-auto w-full max-w-md h-auto rounded-xl"
              src="/prototype.svg"
            />
          </div>
        </div>
      </section>
      <section className="w-full py-10">
        <div className="container px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
            <img
              alt="AI Strategy"
              className="mx-auto w-full max-w-md h-auto rounded-xl"
              src="/strategy.svg"
            />
            <div className="flex flex-col justify-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">AI Strategy Development</h2>
              <p className="text-gray-500 text-base sm:text-lg dark:text-gray-400">
                Our team of AI experts collaborates with you to develop a customized AI strategy, implement
                cutting-edge technologies, and optimize AI-powered solutions for maximum impact.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    className="bg-gradient-to-r from-purple-500 to-indigo-600 inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-200 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    href="#contact"
                  >
                    Learn More
                  </Link>
                </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="w-full min-h-screen pt-12 mt-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <div className="grid items-center justify-center gap-4 text-center">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Get in Touch</h2>
            <p className="mx-auto max-w-[600px] text-gray-500 text-base sm:text-lg md:text-xl lg:text-xl dark:text-gray-400">
              Fill out the form below to learn more about our AI consulting services and how we can help your
              business.
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm space-y-2">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Tekhliq Labs. All rights reserved.</p>
      </footer>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/particles.js/2.0.0/particles.min.js"
        onLoad={() => {
          particlesJS.load("particles-js", "/particlesjs-config.json", function () {
            console.log("callback - particles.js config loaded");
          });
        }}
      />
    </div>
  );
}
