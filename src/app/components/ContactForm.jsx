import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Bebas_Neue } from "next/font/google";
import { Button } from "./ui/Button";

const bebas = Bebas_Neue({ subsets: ["latin"], weight: "400" });

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xqkrrwjl");

  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  return (
    <section
      id="Contact"
      className="flex flex-col px-80 border-b-[1px] py-20 text-black gap-16 items-center border-black border-opacity-20"
    >
      <h2 className={`${bebas.className} text-4xl font-semibold`}>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="flex gap-4">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 border bg-[#F4F7FA] border-white border-opacity-20 rounded-md focus:outline-none focus:border-opacity-40"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm mb-2">
              Email Address
            </label>
            <input
              id="email"
              type="email" 
              name="email"
              className="w-full px-4 py-2 border bg-[#F4F7FA] border-white border-opacity-20 rounded-md focus:outline-none focus:border-opacity-40"
            />
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
            />
          </div>
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-sm mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="w-full px-4 py-2 border bg-[#F4F7FA] border-white border-opacity-20 rounded-md focus:outline-none focus:border-opacity-40"
          />
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
          />
        </div>
        <Button type="submit" className="w-full py-2 bg-gray-300 rounded-md text-black font-semibold hover:bg-gray-400" disabled={state.submitting}>
          Submit
        </Button>
      </form>
    </section>
  );
};

export default ContactForm;
