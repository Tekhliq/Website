import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Bebas_Neue } from "next/font/google";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const bebas = Bebas_Neue({ subsets: ["latin"], weight: "400" });

import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("xqkrrwjl");
  if (state.succeeded) {
      return <p>Thank you for contacting us!</p>;
  }
  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <div className="flex flex-col gap-2 text-left">
        <Label htmlFor="name">
          Name
        </Label>
        <Input id="name" placeholder="John Doe" type="text" />
      </div>
      <div className="flex flex-col gap-2 text-left">
        <Label htmlFor="email">
          Email
        </Label>
        <Input id="email" name="email" placeholder="john@example.com" type="email" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <div className="flex flex-col gap-2 text-left">
        <Label htmlFor="message">
          Message
        </Label>
        <Textarea id="message" name="message" placeholder="How can we help you?" rows={4} />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>
      <Button type="submit" disabled={state.submitting} className="bg-gradient-to-r from-purple-500 to-indigo-600 text-gray-200">
        Submit
      </Button>
    </form>
  );
}

export default ContactForm;