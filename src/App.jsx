
import { motion } from 'framer-motion';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-800 px-6 py-8 font-sans">
      <motion.header className="text-center mb-16" initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <h1 className="text-4xl font-extrabold text-blue-700 mb-2">MetaNest</h1>
        <p className="text-lg text-gray-600">Where Bold Health Brands Take Flight 🚀</p>
      </motion.header>

      <motion.section className="mb-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
        <h2 className="text-2xl font-bold text-center mb-4">What We Do</h2>
        <div className="grid md:grid-cols-2 gap-8 text-center">
          <div>💊 Supplements<br /><span className="text-sm">Whey, Creatine, Hydration, Multis</span></div>
          <div>🧴 Clean Beauty<br /><span className="text-sm">Plant-based skincare & more</span></div>
          <div>🥗 Functional Foods<br /><span className="text-sm">Snacks, drinks, powders</span></div>
          <div>🧠 Health Accessories<br /><span className="text-sm">Smart shakers & tools</span></div>
        </div>
      </motion.section>

      <motion.section className="mb-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
        <h2 className="text-2xl font-bold text-center mb-6">Our Services</h2>
        <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto text-gray-700 text-sm">
          <div>📊 <strong>Market Research:</strong> Validation & analysis</div>
          <div>🎨 <strong>Brand Creation:</strong> Logo, packaging, storytelling</div>
          <div>🏭 <strong>Manufacturing:</strong> Supplier sourcing & compliance</div>
          <div>🚚 <strong>Logistics:</strong> FBA, trademarks, fulfillment</div>
          <div>🛒 <strong>E-Commerce:</strong> Amazon/Shopify setup</div>
          <div>📢 <strong>Marketing:</strong> Ads, influencer & UGC</div>
          <div>🏬 <strong>Retail Expansion:</strong> Sales deck, strategy</div>
          <div>📈 <strong>Growth:</strong> A/B testing, reviews</div>
        </div>
      </motion.section>

      <motion.section className="mb-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
        <h2 className="text-2xl font-bold text-center mb-4">Success Stories</h2>
        <div className="max-w-2xl mx-auto text-center">
          <p className="mb-4">🚀 <strong>MetaLife</strong> – From 0 to 1,000+ units/month on Amazon Canada within 90 days</p>
          <p className="mb-4">💼 <strong>Zenwell</strong> – Launched hydration line in 3 retail chains in Ontario</p>
        </div>
      </motion.section>

      <motion.section className="mb-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
        <h2 className="text-2xl font-bold text-center mb-6">Compare Packages</h2>
        <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto text-sm text-center">
          <div className="border rounded-xl p-4 shadow bg-white">
            <h3 className="text-blue-700 font-bold mb-2">Launch Kit</h3>
            <p>Branding + Product Dev + Basic Setup</p>
            <p className="mt-2 font-semibold">$5,000+</p>
          </div>
          <div className="border rounded-xl p-4 shadow bg-white">
            <h3 className="text-blue-700 font-bold mb-2">Growth Pro</h3>
            <p>Amazon/Shopify Setup + Influencer Marketing</p>
            <p className="mt-2 font-semibold">$8,000+</p>
          </div>
          <div className="border rounded-xl p-4 shadow bg-white">
            <h3 className="text-blue-700 font-bold mb-2">Retail Ready</h3>
            <p>Packaging, Sales Deck, Retail Strategy</p>
            <p className="mt-2 font-semibold">$15,000+</p>
          </div>
        </div>
      </motion.section>

      <motion.section className="mb-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
        <h2 className="text-2xl font-bold text-center mb-4">Meet the Team</h2>
        <div className="flex justify-center gap-10 text-center text-sm text-gray-700">
          <div><div className="text-xl">👨‍💼</div>Javad — Strategy</div>
          <div><div className="text-xl">👩‍🔬</div>Sara — Regulatory</div>
          <div><div className="text-xl">🎨</div>Ali — Branding</div>
        </div>
      </motion.section>

      <motion.section className="text-center max-w-md mx-auto bg-white p-6 rounded-xl shadow" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <h2 className="text-xl font-bold mb-4">Contact Us</h2>
        <form action="https://formspree.io/f/mwkdljyk" method="POST" className="space-y-4">
          <input type="text" name="name" placeholder="Your Name" required className="w-full border px-4 py-2 rounded" />
          <input type="email" name="email" placeholder="Your Email" required className="w-full border px-4 py-2 rounded" />
          <textarea name="message" placeholder="Your Message" rows="4" className="w-full border px-4 py-2 rounded" required></textarea>
          <button type="submit" className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800">Send Message</button>
        </form>
      </motion.section>
    </div>
  );
}
