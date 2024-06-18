"use client";
import Link from "next/link";
import Script from "next/script";
import ContactForm from "./components/ContactForm";

export default function Component() {
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
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4 cursor-pointer" href="#services">
            Services
          </Link>

          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#contact">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section id="particles-js"></section>
        <section className="absolute top-0 w-full min-h-screen py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2 mb-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Unlock the Power of
                </h1>
                <h1 className=" text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-600">
                    LLM Applications
                  </span>{" "}
                  with
                </h1>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none ">
                  Tekhliq Labs
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Helping Businesses Realize Value from AI
                </p>
              </div>
              <div className="mt-20">
                <Link
                  className="inline-flex h-9 items-center justify-center rounded-md bg-gradient-to-r from-purple-500 to-indigo-600 px-4 py-2 text-sm font-medium text-gray-200 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 "
                  href="#contact"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section id="services" className="w-full  bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  {/* <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                    AI Consulting Services
                  </div> */}
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Rapid Prototyping</h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    We help businesses realize the value of AI.{" "}
                    <span className="underline decoration-purple-600">
                      Our Proof of Concept (POC) is delivered within a month
                    </span>
                    , focusing on practical and scalable solutions
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
              <img
                alt="AI Consulting"
                className="mx-auto  overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                height="310"
                src="/prototype.svg"
                width="550"
              />
            </div>
          </div>
        </section>

        <section className="w-full py-10 ">
          <div className="container px-4 md:px-6">
            <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <img
                alt="AI Consulting"
                className=" overflow-hidden rounded-xl object-cover object-center  "
                height="200px"
                src="/strategy.svg"
                width="500px"
              />
              <div className="flex flex-col justify-center space-y-4 lg:order-last">
                <div className="space-y-2">
                  {/* <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                    AI Consulting Services
                  </div> */}
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">AI Strategy Development</h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Our team of AI experts collaborates with you to develop a customized AI strategy, implement
                    cutting-edge technologies, and optimize AI-powered solutions for maximum impact.
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
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="grid items-center justify-center gap-4 text-center">
              <div className="space-y-3">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Get in Touch</h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
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
