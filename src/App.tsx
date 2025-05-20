import React from 'react';
import { BookOpen, Search, Star, ChevronDown, Bookmark, Clock, FileText } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="py-4 px-6 flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <BookOpen className="h-6 w-6 text-indigo-600" />
          <span className="font-semibold">EasyRead</span>
        </div>
        <div className="flex gap-6">
          <a href="#features" className="text-gray-600 hover:text-indigo-600 transition-colors">Features</a>
          <a href="#faq" className="text-gray-600 hover:text-indigo-600 transition-colors">FAQ</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl font-bold leading-tight mb-6 animate-fade-in">
            Get the essence of{' '}
            <span className="text-indigo-600">Medium articles</span>
            {' '}in seconds
          </h1>
          <div className="space-y-4 mb-8 animate-fade-in-up">
            <p className="text-gray-600">
              Quick TL;DR summaries with <span className="text-indigo-600">key takeaways</span>
            </p>
            <p className="text-gray-600">
              Save time with <span className="text-indigo-600">instant highlights</span>
            </p>
            <p className="text-gray-600">
              Never miss the <span className="text-indigo-600">important points</span>
            </p>
          </div>
          <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-all transform hover:scale-105 hover:shadow-lg animate-bounce-subtle">
            Add to browser
          </button>
          <p className="mt-4 text-gray-600">
            Join <span className="font-semibold">5,000+</span> daily readers
          </p>
          <div className="flex justify-center mt-6 space-x-[-8px]">
            {[
              "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
              "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
              "https://images.unsplash.com/photo-1517841905240-472988babdf9",
              "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6",
              "https://images.unsplash.com/photo-1524504388940-b1c1722653e1"
            ].map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`Reader ${idx + 1}`}
                className="w-8 h-8 rounded-full border-2 border-white hover:scale-110 transition-transform"
              />
            ))}
            <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 text-xs font-medium border-2 border-white">
              +1k
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Read smarter, not <span className="text-indigo-600">harder</span>
          </h2>
          <div className="space-y-12">
            <Feature 
              icon={<FileText />}
              title="Quick TL;DR Summaries"
              description="Get instant summaries of lengthy articles, capturing the main points in seconds"
              isNew
            />
            <Feature 
              icon={<Star />}
              title="Key Takeaways"
              description="Essential points and insights highlighted for quick understanding"
            />
            <Feature 
              icon={<Clock />}
              title="Time-Saving Reading"
              description="Focus on what matters most, perfect for busy professionals"
            />
            <Feature 
              icon={<Bookmark />}
              title="Save Important Points"
              description="Bookmark and organize key insights for future reference"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            What readers say about EasyRead
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Testimonial 
              name="Sarah"
              image="https://images.unsplash.com/photo-1534528741775-53994a69daeb"
              text="EasyRead has transformed how I consume Medium articles. The summaries are spot-on and save me so much time!"
            />
            <Testimonial 
              name="Michael"
              image="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d"
              text="As a busy professional, this extension is a game-changer. I can quickly grasp the key points of any article."
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <FaqItem 
              question="How does EasyRead work?"
              answer="EasyRead automatically analyzes Medium articles and generates concise summaries and key takeaways using advanced AI technology. Just click the extension icon while reading any Medium article."
            />
            <FaqItem 
              question="Is it free to use?"
              answer="Yes, EasyRead is completely free to use for all Medium readers."
            />
            <FaqItem 
              question="Does it work on all Medium articles?"
              answer="Yes, EasyRead works on all public Medium articles. Premium articles require a Medium membership to access."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function Feature({ icon, title, description, isNew = false }) {
  return (
    <div className="flex items-start gap-4 transform hover:scale-[1.02] transition-transform">
      <div className="p-2 bg-indigo-100 rounded-lg text-indigo-600">
        {icon}
      </div>
      <div>
        <div className="flex items-center gap-2">
          <h3 className="font-semibold text-xl">{title}</h3>
          {isNew && (
            <span className="bg-indigo-100 text-indigo-600 text-sm px-2 py-1 rounded">NEW</span>
          )}
        </div>
        <p className="text-gray-600 mt-1">{description}</p>
      </div>
    </div>
  );
}

function Testimonial({ name, image, text }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
      <p className="text-gray-600 mb-4">{text}</p>
      <div className="flex items-center gap-3">
        <img src={image} alt={name} className="w-10 h-10 rounded-full object-cover" />
        <div>
          <p className="font-medium">{name}</p>
          <div className="flex text-indigo-400">
            <Star className="h-4 w-4 fill-current" />
            <Star className="h-4 w-4 fill-current" />
            <Star className="h-4 w-4 fill-current" />
            <Star className="h-4 w-4 fill-current" />
            <Star className="h-4 w-4 fill-current" />
          </div>
        </div>
      </div>
    </div>
  );
}

function FaqItem({ question, answer }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="border-b border-gray-200 pb-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium text-lg">{question}</span>
        <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div className={`mt-2 text-gray-600 transition-all duration-300 ${isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <p>{answer}</p>
      </div>
    </div>
  );
}

export default App;