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
        <div className="text-4xl font-extrabold text-blue-700 tracking-tight mb-2">MetaNest</div>
        <p className="text-lg text-gray-600">Health-Focused Brand Incubator Built on the Success of MetaLife</p>
      </motion.header>

      <motion.section
        className="mb-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-900">What We Do</h2>
        <div className="grid md:grid-cols-2 gap-10 text-center">
          <motion.div whileHover={{ scale: 1.05 }}><h3 className="text-xl font-semibold mb-2 text-blue-600">💊 Supplements</h3><p>Creatine, Whey, BCAAs, Multivitamins, Hydration Powders</p></motion.div>
          <motion.div whileHover={{ scale: 1.05 }}><h3 className="text-xl font-semibold mb-2 text-blue-600">🧴 Clean Beauty</h3><p>Plant-based skincare, serums, moisturizers, anti-aging</p></motion.div>
          <motion.div whileHover={{ scale: 1.05 }}><h3 className="text-xl font-semibold mb-2 text-blue-600">🥗 Functional Foods</h3><p>Low-carb snacks, functional drinks, superfood powders</p></motion.div>
          <motion.div whileHover={{ scale: 1.05 }}><h3 className="text-xl font-semibold mb-2 text-blue-600">🧠 Health Accessories</h3><p>Smart shakers, wellness gear, dispensers, tracking tools</p></motion.div>
        </div>
      </motion.section>

      <motion.section className="mb-20" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-900">Our Services</h2>
        <ul className="space-y-4 max-w-3xl mx-auto text-gray-700 text-base">
          <li><strong>📊 Market Research:</strong> Competitive analysis, product validation</li>
          <li><strong>🎨 Brand Creation:</strong> Logo, packaging, storytelling</li>
          <li><strong>🏭 Manufacturing:</strong> Supplier sourcing, regulatory compliance</li>
          <li><strong>🚚 Logistics:</strong> Trademark, FBA, fulfillment setup</li>
          <li><strong>🛒 E-Commerce:</strong> Shopify & Amazon store setup</li>
          <li><strong>📢 Marketing:</strong> Paid ads, influencer campaigns, UGC</li>
          <li><strong>🏬 Retail Expansion:</strong> Sales decks, wholesale strategy</li>
          <li><strong>📈 Growth Optimization:</strong> Analytics, A/B testing, reviews</li>
        </ul>
      </motion.section>

      <motion.section className="mb-20" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-900">Packages</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <motion.div className="border rounded-2xl p-6 shadow-lg bg-white" whileHover={{ scale: 1.05 }}>
            <h3 className="text-xl font-bold mb-2 text-blue-700">Launch Kit</h3>
            <p className="mb-2 text-gray-600">Branding, product development, online setup</p>
            <p className="font-semibold">Starting at $5,000</p>
          </motion.div>
          <motion.div className="border rounded-2xl p-6 shadow-lg bg-white" whileHover={{ scale: 1.05 }}>
            <h3 className="text-xl font-bold mb-2 text-blue-700">Growth Pro</h3>
            <p className="mb-2 text-gray-600">Amazon/Shopify setup, influencer marketing</p>
            <p className="font-semibold">Starting at $8,000</p>
          </motion.div>
          <motion.div className="border rounded-2xl p-6 shadow-lg bg-white" whileHover={{ scale: 1.05 }}>
            <h3 className="text-xl font-bold mb-2 text-blue-700">Retail Ready</h3>
            <p className="mb-2 text-gray-600">Sales material, packaging, B2B strategy</p>
            <p className="font-semibold">Starting at $15,000</p>
          </motion.div>
        </div>
      </motion.section>

      <motion.section className="text-center" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Partner with MetaNest</h2>
        <p className="mb-6 text-gray-700">We also offer equity-based partnerships for high-potential brands.</p>
        <a
          href="mailto:ja.farhadi@yahoo.com?subject=Brand%20Launch%20Inquiry"
          className="bg-blue-700 text-white py-3 px-8 rounded-full text-lg hover:bg-blue-800 transition"
        >
          Get Started
        </a>
      </motion.section>
    </div>
  );
}
