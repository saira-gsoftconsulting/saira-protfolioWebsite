"use client";

import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import AnimatedSection from './ui/animationSection';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useState } from 'react';

type Inputs = {
  name: string;
  email: string;
  message: string;
};

const Contact: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<Inputs>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  // IMPORTANT: Replace this with your actual form handling logic
  // (e.g., using Formspree, Netlify Forms, or a custom backend endpoint)
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);
    console.log("Form Data:", data);

    // --- SIMULATED API CALL ---
    await new Promise(resolve => setTimeout(resolve, 1500));
    // Replace this simulation with your actual form submission logic
    const success = Math.random() > 0.2; // Simulate success/failure
    // --- END SIMULATION ---

    if (success) {
      setSubmitStatus('success');
      reset(); // Clear form on success
    } else {
      setSubmitStatus('error');
    }
    setIsSubmitting(false);
  };

  const inputVariant = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  return (
    <AnimatedSection id="contact">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Get In <span className="text-secondary">Touch</span>
        </h2>
        <div className="flex flex-col md:flex-row gap-12">
          {/* Contact Info */}
          <motion.div
            className="md:w-1/3 space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-primary mb-4">Contact Information</h3>
            <p className="text-text_secondary flex items-center gap-3">
              <FaEnvelope className="text-accent text-xl" />
              <a href="mailto:your.email@example.com" className="hover:text-primary transition-colors">
                your.email@example.com
              </a>
            </p>
            <p className="text-text_secondary flex items-center gap-3">
              <FaMapMarkerAlt className="text-accent text-xl" />
              <span>Your City, Country (Optional)</span>
            </p>
            <p className="text-text_secondary mt-4">
                Feel free to reach out! I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
              {/* Add Social links here again if desired */}
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            className="md:w-2/3 space-y-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }} // Stagger form fields
          >
             <motion.div variants={inputVariant}>
               <label htmlFor="name" className="block text-sm font-medium text-text_secondary mb-1">Name</label>
               <input
                 type="text"
                 id="name"
                 {...register("name", { required: "Name is required" })}
                 className={`w-full px-4 py-2 bg-slate-700 border ${errors.name ? 'border-red-500' : 'border-slate-600'} rounded-md focus:ring-primary focus:border-primary outline-none transition duration-200 text-text_primary placeholder-slate-500`}
                 placeholder="John Doe"
               />
               {errors.name && <span className="text-red-500 text-xs mt-1">{errors.name.message}</span>}
             </motion.div>

             <motion.div variants={inputVariant}>
               <label htmlFor="email" className="block text-sm font-medium text-text_secondary mb-1">Email</label>
               <input
                 type="email"
                 id="email"
                 {...register("email", {
                   required: "Email is required",
                   pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" }
                 })}
                  className={`w-full px-4 py-2 bg-slate-700 border ${errors.email ? 'border-red-500' : 'border-slate-600'} rounded-md focus:ring-primary focus:border-primary outline-none transition duration-200 text-text_primary placeholder-slate-500`}
                 placeholder="john.doe@example.com"
               />
               {errors.email && <span className="text-red-500 text-xs mt-1">{errors.email.message}</span>}
             </motion.div>

             <motion.div variants={inputVariant}>
               <label htmlFor="message" className="block text-sm font-medium text-text_secondary mb-1">Message</label>
               <textarea
                 id="message"
                 rows={5}
                 {...register("message", { required: "Message is required" })}
                  className={`w-full px-4 py-2 bg-slate-700 border ${errors.message ? 'border-red-500' : 'border-slate-600'} rounded-md focus:ring-primary focus:border-primary outline-none transition duration-200 text-text_primary placeholder-slate-500 resize-none`}
                 placeholder="Your message..."
               />
               {errors.message && <span className="text-red-500 text-xs mt-1">{errors.message.message}</span>}
             </motion.div>

             <motion.div variants={inputVariant}>
               <motion.button
                 type="submit"
                 disabled={isSubmitting}
                 className="w-full md:w-auto bg-primary text-white font-semibold py-3 px-8 rounded-full hover:bg-secondary transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-accent focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                 whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                 whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
               >
                 {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                       Sending...
                    </>
                 ) : (
                     <>
                       <FaPaperPlane /> Send Message
                     </>
                 )}
               </motion.button>
             </motion.div>

             {submitStatus === 'success' && (
               <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-500 mt-4 text-center">
                 Message sent successfully! Thank you.
               </motion.p>
             )}
             {submitStatus === 'error' && (
               <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-500 mt-4 text-center">
                 Something went wrong. Please try again later.
               </motion.p>
             )}
          </motion.form>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Contact;