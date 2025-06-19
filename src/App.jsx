import { motion } from 'framer-motion';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 text-gray-800 p-6 font-sans">
      <motion.header
        className="text-center mb-16"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-3xl font-extrabold text-blue-700 tracking-tight mb-2">MetaNest</div>
        <p className="text-lg text-gray-600">Your Launchpad for Health-Driven Brands</p>
      </motion.header>

      <motion.section
        className="text-center mb-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Get in Touch</h2>
        <p className="mb-6 text-gray-700">We help launch and scale health-driven brands.</p>
        <a
          href="mailto:ja.farhadi@yahoo.com?subject=Let%27s%20Build%20a%20Brand"
          className="bg-blue-700 text-white py-3 px-8 rounded-full text-lg hover:bg-blue-800 transition"
        >
          Contact Us
        </a>
      </motion.section>
    </div>
  );
}
