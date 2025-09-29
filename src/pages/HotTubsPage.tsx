import React from 'react';
import SEOHead from '../components/SEOHead';

const HotTubsPage: React.FC = () => {
  return (
    <div className="bg-[#2B2B2B] text-white">
      <SEOHead
        title="Highland Outdoor Living | Arctic Spas Hot Tubs in Inverness & Scottish Highlands"
        description="Discover premium eco-friendly hot tubs from Arctic Spas at Highland Outdoor Living. Relax, refresh, and rejuvenate with smart, durable, and energy-efficient spas built for the Scottish Highlands."
        image="/Arctic-Spa-1.jpg"
        url="/hot-tubs"
      />

      {/* Section 1: Hero */}
      <section className="relative min-h-[80vh] md:min-h-[92vh] flex items-center justify-center overflow-hidden">
        <img src="/Arctic-Spa-1.jpg" alt="Arctic Spas lifestyle" className="absolute inset-0 w-full h-full object-cover opacity-40" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-[#2B2B2B]/40 to-[#2B2B2B]" />
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight">
            Luxury Hot Tubs, Engineered for the Highlands
          </h1>
          <p className="mt-4 text-lg md:text-2xl text-[#E0E0E0]">
            Eco-friendly. Smart. Built to Last. Discover Arctic Spas®.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://www.arcticspas.co.uk/" target="_blank" rel="noreferrer" className="px-7 py-4 rounded-md bg-[#8B1E2D] hover:bg-[#6f1824] text-white font-semibold shadow-lg">View the Range</a>
            <a href="/contact" className="px-7 py-4 rounded-md bg-[#CBB79C] text-[#2B2B2B] hover:bg-[#b9a185] font-semibold shadow-lg">Book a Showroom Visit</a>
          </div>
        </div>
      </section>

      {/* Section 2: What Makes Arctic Spas Different? */}
      <section className="py-16 md:py-24 bg-[#2B2B2B] px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Not Just a Hot Tub. A Lifestyle Upgrade.</h2>
          <p className="text-[#E0E0E0] max-w-3xl">
            Arctic Spas® are purpose-built for performance, comfort, and sustainability. From ultra-efficient insulation to a rock-solid foundation, every detail is engineered for life in the Scottish Highlands.
          </p>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard icon="♻️" title="Eco-friendly technology" description="Low energy use with smart insulation and efficient pumps." />
            <FeatureCard icon="🛠" title="Forever Floor™" description="Single-piece base engineered for longevity and stability." />
            <FeatureCard icon="❄️" title="Insulated for all seasons" description="Built to thrive in the Scottish climate, all year round." />
            <FeatureCard icon="📱" title="Smart controls" description="Manage your spa from anywhere with app-connected features." />
          </div>
        </div>
      </section>

      {/* Section 3: Inside the Experience */}
      <section className="py-16 md:py-24 bg-white text-[#2B2B2B] px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <img src="/Arctic-Spa-1.jpg" alt="Spa interior" className="rounded-xl shadow-lg w-full h-auto object-cover" loading="lazy" />
          <div>
            <h3 className="text-3xl md:text-4xl font-semibold mb-4 text-[#2B2B2B]">Relax. Refresh. Rejuvenate.</h3>
            <ul className="space-y-3 text-lg">
              <li>• Hydrotherapy massage with SDS seat</li>
              <li>• Premium lighting options</li>
              <li>• Sizes from 3 to 12+ people</li>
              <li>• Built-in entertainment (Bluetooth, speakers)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 4: Hydrotherapy Highlight */}
      <section className="py-16 md:py-24 bg-[#2B2B2B] px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1 text-[#E0E0E0]">
            <h3 className="text-3xl md:text-4xl font-semibold mb-4">The Ultimate Massage, On-Demand</h3>
            <p>
              The SDS massage seat delivers industry-leading hydrotherapy using six bearingless jets and a high-flow pump configuration. Enjoy deep, targeted relief designed to restore and revitalise.
            </p>
          </div>
          <img src="/Arctic-Spa-1.jpg" alt="SDS massage seat" className="order-1 md:order-2 rounded-xl shadow-lg w-full h-auto object-cover" loading="lazy" />
        </div>
      </section>

      {/* Section 5: Eco-Friendly Innovation (Comparison Table) */}
      <section className="py-16 md:py-24 bg-white text-[#2B2B2B] px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-semibold mb-6">Soak Green. Live Clean.</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left border border-[#E0E0E0] rounded-lg overflow-hidden">
              <thead className="bg-[#F6F6F6]">
                <tr>
                  <th className="p-4">Feature</th>
                  <th className="p-4">Arctic Spas®</th>
                  <th className="p-4">Standard Hot Tub</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-4">Energy Efficiency</td>
                  <td className="p-4">✅ Smart insulated design</td>
                  <td className="p-4">❌ High running costs</td>
                </tr>
                <tr className="border-t">
                  <td className="p-4">Eco Materials</td>
                  <td className="p-4">✅ Responsible</td>
                  <td className="p-4">❌ Often ignored</td>
                </tr>
                <tr className="border-t">
                  <td className="p-4">Smart Tech</td>
                  <td className="p-4">✅ App controls</td>
                  <td className="p-4">❌ Limited</td>
                </tr>
                <tr className="border-t">
                  <td className="p-4">Longevity</td>
                  <td className="p-4">✅ Forever Floor™ base</td>
                  <td className="p-4">❌ Needs concrete prep</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section 6: Forever Floor Advantage */}
      <section className="py-16 md:py-24 bg-[#2B2B2B] text-white px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-3xl md:text-4xl font-semibold mb-4">Strength That Lasts a Lifetime</h3>
            <p className="text-[#E0E0E0]">
              The Forever Floor™ is a single-piece, fibreglass-reinforced base that resists pests and moisture, and often eliminates the need for site preparation. It’s the strongest spa foundation on the market.
            </p>
          </div>
          <img src="/Arctic-Spa-1.jpg" alt="Forever Floor schematic" className="rounded-xl shadow-lg w-full h-auto object-cover" loading="lazy" />
        </div>
      </section>

      {/* Section 7: Lighting Packages */}
      <section className="py-16 md:py-24 bg-white text-[#2B2B2B] px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-semibold mb-8">Set the Mood, Your Way</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <img src="/Arctic-Spa-1.jpg" alt="Subtle glow" className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/40 text-white">Subtle glow — unwind in calm ambience</div>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <img src="/Arctic-Spa-1.jpg" alt="Party mode" className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/40 text-white">Party mode — multi-colour jets and LEDs</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Testimonials / Lifestyle */}
      <section className="py-16 md:py-24 bg-[#2B2B2B] px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-semibold mb-8">Loved by Families Across the Highlands</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <TestimonialCard quote="Best investment we’ve made for our home." author="Inverness" />
            <TestimonialCard quote="Warm even in winter, and so efficient." author="Fort William" />
            <TestimonialCard quote="The hydrotherapy is next level." author="Nairn" />
          </div>
        </div>
      </section>

      {/* Section 9: CTA End */}
      <section className="py-16 md:py-24 bg-white text-[#2B2B2B] px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-semibold">Your Ticket to Paradise Starts Here</h3>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="px-7 py-4 rounded-md bg-[#8B1E2D] hover:bg-[#6f1824] text-white font-semibold">Get a Free Quote</a>
            <a href="/gallery" className="px-7 py-4 rounded-md bg-[#CBB79C] text-[#2B2B2B] hover:bg-[#b9a185] font-semibold">See Live Demo</a>
            <a href="tel:+441463223085" className="px-7 py-4 rounded-md border border-[#2B2B2B] text-[#2B2B2B] hover:bg-[#F3F3F3] font-semibold">Talk to Our Team</a>
          </div>
        </div>
      </section>

      {/* Section 10: FAQ */}
      <section className="py-16 md:py-24 bg-[#2B2B2B] text-white px-6">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-semibold mb-6">Frequently Asked Questions</h3>
          <div className="space-y-4">
            <FaqItem q="How energy-efficient are Arctic Spas hot tubs?" a="They use smart insulation and efficient components to minimise running costs, ideal for the Scottish climate." />
            <FaqItem q="Can they be used outdoors in winter?" a="Yes. Arctic Spas are engineered for all seasons, with robust insulation and reliable controls." />
            <FaqItem q="How does delivery/installation work?" a="Our team handles delivery and setup. The Forever Floor™ base can reduce site prep needs." />
            <FaqItem q="Can I customise features?" a="Absolutely. Choose lighting packages, entertainment, shell colours, seating layouts and more." />
            <FaqItem q="What is the Forever Floor™?" a="A single-piece, fibreglass-reinforced foundation that’s moisture and pest-resistant, built to last." />
          </div>
        </div>
      </section>
    </div>
  );
};

function FeatureCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-[#1f1f1f] p-6">
      <div className="text-3xl">{icon}</div>
      <h4 className="mt-3 text-xl font-semibold">{title}</h4>
      <p className="mt-2 text-[#E0E0E0]">{description}</p>
    </div>
  );
}

function TestimonialCard({ quote, author }: { quote: string; author: string }) {
  return (
    <div className="rounded-xl bg-[#1f1f1f] border border-white/10 p-6">
      <p className="text-lg">“{quote}”</p>
      <div className="mt-3 text-[#CBB79C]">— {author}</div>
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="group border border-white/10 rounded-lg overflow-hidden bg-[#1f1f1f]">
      <summary className="cursor-pointer list-none px-5 py-4 font-semibold flex items-center justify-between">
        <span>{q}</span>
        <span className="transition-transform group-open:rotate-45 text-2xl">+</span>
      </summary>
      <div className="px-5 pb-5 text-[#E0E0E0]">{a}</div>
    </details>
  );
}

export default HotTubsPage;


