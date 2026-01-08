"use client";

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { motion } from 'framer-motion';

export default function ContactForm() {
  // GANTI 'YOUR_FORM_ID' DENGAN ID DARI FORMSPREE ANDA
  const [state, handleSubmit] = useForm("YOUR_FORM_ID");

  if (state.succeeded) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-slate-800 p-8 rounded-xl border border-teal-500/30 text-center"
      >
        <h3 className="text-2xl font-bold text-teal-400 mb-2">Pesan Terkirim!</h3>
        <p className="text-slate-300">Terima kasih telah menghubungi saya. Saya akan segera membalas email Anda.</p>
      </motion.div>
    );
  }

  return (
    <motion.form 
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-slate-800 p-6 md:p-8 rounded-xl border border-slate-700 shadow-lg"
    >
      <div className="mb-6">
        <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">
          Email Anda
        </label>
        <input
          id="email"
          type="email" 
          name="email"
          placeholder="contoh@email.com"
          required
          className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 text-slate-100 transition placeholder-slate-600"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-400 text-sm mt-1" />
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">
          Pesan
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tulis pesan Anda di sini..."
          required
          className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 text-slate-100 transition placeholder-slate-600 resize-none"
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-400 text-sm mt-1" />
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="w-full bg-teal-500 hover:bg-teal-600 text-slate-900 font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {state.submitting ? 'Mengirim...' : 'Kirim Pesan'}
      </button>
    </motion.form>
  );
}