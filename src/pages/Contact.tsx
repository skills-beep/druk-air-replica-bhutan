
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // In a real app, you would send this data to your backend
    toast({
      title: "Message sent",
      description: "We'll get back to you as soon as possible!",
    });
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-druk-blue mb-2">Contact Us</h1>
        <p className="text-gray-600 mb-8">
          We would love to hear from you. Please fill out the form below and we'll get back to you as soon as possible.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Full Name
                  </label>
                  <Input id="name" type="text" placeholder="John Doe" required />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email Address
                  </label>
                  <Input id="email" type="email" placeholder="john@example.com" required />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-1">
                    Subject
                  </label>
                  <Input id="subject" type="text" placeholder="Booking Inquiry" required />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Message
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Your message here..." 
                    className="min-h-[150px]"
                    required
                  />
                </div>
              </div>
              
              <Button type="submit" className="bg-druk-blue hover:bg-druk-darkblue w-full">
                Send Message
              </Button>
            </form>
          </div>
          
          <div>
            <div className="bg-gray-50 p-6 rounded-lg h-full">
              <h2 className="text-xl font-semibold text-druk-blue mb-4">Contact Information</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-gray-900">Head Office</h3>
                  <p className="text-gray-600">
                    Druk Air Corporation Limited<br />
                    Paro International Airport<br />
                    Paro, Kingdom of Bhutan
                  </p>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-900">Phone</h3>
                  <p className="text-gray-600">+975 8 271856 / 271857</p>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-900">Email</h3>
                  <p className="text-gray-600">info@drukair.com.bt</p>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-900">Operating Hours</h3>
                  <p className="text-gray-600">Monday to Friday: 9:00 AM - 5:00 PM<br />
                  Saturday: 9:00 AM - 1:00 PM<br />
                  Sunday: Closed</p>
                </div>
                
                <div className="mt-6">
                  <h3 className="font-medium text-gray-900 mb-2">Find Us</h3>
                  <div className="rounded-lg overflow-hidden h-[200px] shadow-md">
                    <img 
                      src="https://images.unsplash.com/photo-1526392060635-9d6019884377?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                      alt="Paro Airport Map"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
