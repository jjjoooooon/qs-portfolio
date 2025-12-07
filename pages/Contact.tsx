import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading, Card, Button } from '../components/ui';
import { PERSONAL_INFO } from '../constants';
import { Mail, MapPin, Send, Loader2, MessageSquare } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import analyticsService from '../services/analytics';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate network request
    setTimeout(() => {
      setStatus('success');
      analyticsService.trackEvent('form_submit', { name: formData.name });
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="max-w-4xl mx-auto">
      <SectionHeading 
        title="Get In Touch" 
        subtitle="Have a project in mind or want to discuss rigorous testing strategies? Send me a message."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.5 }}
           className="space-y-8"
        >
          <Card className="p-8 h-full bg-gradient-to-br from-secondary/50 to-background border-primary/20">
             <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
             
             <div className="space-y-6">
                <div className="flex items-start gap-4">
                   <div className="p-3 bg-secondary rounded-lg text-primary">
                      <Mail size={24} />
                   </div>
                   <div>
                      <p className="text-sm text-muted-foreground mb-1">Email</p>
                      <a href={`mailto:${PERSONAL_INFO.email}`} className="text-foreground hover:text-primary transition-colors text-lg font-medium">
                        {PERSONAL_INFO.email}
                      </a>
                   </div>
                </div>

                <div className="flex items-start gap-4">
                   <div className="p-3 bg-secondary rounded-lg text-primary">
                      <MapPin size={24} />
                   </div>
                   <div>
                      <p className="text-sm text-muted-foreground mb-1">Location</p>
                      <p className="text-foreground text-lg font-medium">
                        {PERSONAL_INFO.location}
                      </p>
                   </div>
                </div>

                <div className="flex items-start gap-4">
                   <div className="p-3 bg-secondary rounded-lg text-primary">
                      <MessageSquare size={24} />
                   </div>
                   <div>
                      <p className="text-sm text-muted-foreground mb-1">Socials</p>
                      <div className="flex gap-4 mt-2">
                        <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground underline decoration-primary/50">LinkedIn</a>
                        <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground underline decoration-primary/50">GitHub</a>
                      </div>
                   </div>
                </div>
             </div>

             <div className="mt-12 p-4 bg-primary/10 rounded-lg border border-primary/20">
                <p className="text-primary text-sm">
                   "Quality is not an act, it is a habit." – Aristotle
                </p>
             </div>
          </Card>
        </motion.div>

        {/* Form */}
        <motion.div
           initial={{ opacity: 0, x: 20 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.5, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6 bg-card p-8 rounded-xl border border-border backdrop-blur-sm shadow-sm">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-input border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-input border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-input border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                placeholder="Let's talk about your next project..."
              />
            </div>
            
            <Button type="submit" disabled={status === 'loading'} className="w-full">
               {status === 'loading' ? (
                 <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...</>
               ) : status === 'success' ? (
                 "Message Sent!"
               ) : (
                 <><Send className="mr-2 h-4 w-4" /> Send Message</>
               )}
            </Button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;