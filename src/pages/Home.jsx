import Hero from '../components/Hero';
import { motion } from 'framer-motion';
import { FaCoffee, FaBirthdayCake, FaWifi } from 'react-icons/fa';

export default function Home() {
  return (
    <div>
      <Hero />
      
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif text-gray-900">Why Choose Us?</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Feature 
              icon={<FaCoffee className="text-brown-600" size={32} />}
              title="Premium Coffee"
              description="Sourced from the finest beans around the world"
            />
            <Feature 
              icon={<FaBirthdayCake className="text-brown-600" size={32} />}
              title="Fresh Pastries"
              description="Baked daily in our artisanal kitchen"
            />
            <Feature 
              icon={<FaWifi className="text-brown-600" size={32} />}
              title="Cozy Atmosphere"
              description="Free WiFi and comfortable seating"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

const Feature = ({ icon, title, description }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="text-center p-6 rounded-lg bg-gray-50"
  >
    <div className="flex justify-center mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);