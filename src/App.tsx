import React from 'react';
import { 
  Sparkles, 
  Flame, 
  Droplets, 
  Mountain, 
  Wind, 
  Layers, 
  Code, 
  Brain, 
  Globe, 
  Wand2, 
  ChevronRight, 
  User, 
  Home, 
  LogOut
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-purple-900 to-indigo-900 text-white">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6">
        <div className="flex items-center space-x-2">
          <Sparkles className="h-6 w-6 text-amber-400" />
          <span className="text-xl font-bold">Crystal Alchemist</span>
        </div>
        <div className="flex items-center space-x-6">
          <a href="#" className="hover:text-amber-400 transition-colors">Overview</a>
          <a href="#" className="hover:text-amber-400 transition-colors">Assets</a>
          <a href="#" className="hover:text-amber-400 transition-colors">Settings</a>
          <div className="relative group">
            <button className="flex items-center space-x-1 bg-indigo-700 hover:bg-indigo-600 px-4 py-2 rounded-full transition-colors">
              <User className="h-4 w-4" />
              <span>Anonymous</span>
            </button>
            <div className="absolute right-0 mt-2 w-48 bg-indigo-800 rounded-lg shadow-lg py-2 z-10 hidden group-hover:block">
              <a href="#" className="flex items-center px-4 py-2 hover:bg-indigo-700">
                <Home className="h-4 w-4 mr-2" />
                <span>Back to home</span>
              </a>
              <a href="#" className="flex items-center px-4 py-2 hover:bg-indigo-700">
                <LogOut className="h-4 w-4 mr-2" />
                <span>Sign Out</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="text-center py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">
            <span className="text-amber-400">Transform</span> your game development journey
          </h1>
          <p className="text-xl text-indigo-200 mb-10">
            Unleash your creativity with our powerful alchemical engine for game creation
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-amber-500 hover:bg-amber-400 text-indigo-900 font-bold px-8 py-3 rounded-full transition-colors">
              Get Started
            </button>
            <button className="border border-indigo-400 hover:border-amber-400 hover:text-amber-400 px-8 py-3 rounded-full transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16 px-4 bg-indigo-800 bg-opacity-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Powerful Tools for Game Creators</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-indigo-800 bg-opacity-50 p-6 rounded-xl hover:transform hover:scale-105 transition-transform">
              <div className="bg-gradient-to-br from-purple-600 to-indigo-600 p-3 rounded-lg inline-block mb-4">
                <Code className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Game Engine</h3>
              <p className="text-indigo-200">Powerful alchemical engine for game creation</p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-indigo-800 bg-opacity-50 p-6 rounded-xl hover:transform hover:scale-105 transition-transform">
              <div className="bg-gradient-to-br from-purple-600 to-indigo-600 p-3 rounded-lg inline-block mb-4">
                <Layers className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Asset Library</h3>
              <p className="text-indigo-200">Mystical assets and components library</p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-indigo-800 bg-opacity-50 p-6 rounded-xl hover:transform hover:scale-105 transition-transform">
              <div className="bg-gradient-to-br from-purple-600 to-indigo-600 p-3 rounded-lg inline-block mb-4">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">AI Systems</h3>
              <p className="text-indigo-200">Advanced AI for NPCs and game logic</p>
            </div>
            
            {/* Feature 4 */}
            <div className="bg-indigo-800 bg-opacity-50 p-6 rounded-xl hover:transform hover:scale-105 transition-transform">
              <div className="bg-gradient-to-br from-purple-600 to-indigo-600 p-3 rounded-lg inline-block mb-4">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">World Builder</h3>
              <p className="text-indigo-200">Create vast magical realms and dungeons</p>
            </div>
            
            {/* Feature 5 */}
            <div className="bg-indigo-800 bg-opacity-50 p-6 rounded-xl hover:transform hover:scale-105 transition-transform">
              <div className="bg-gradient-to-br from-purple-600 to-indigo-600 p-3 rounded-lg inline-block mb-4">
                <Wand2 className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Effects System</h3>
              <p className="text-indigo-200">Particle effects and magical animations</p>
            </div>
            
            {/* Feature 6 */}
            <div className="bg-indigo-800 bg-opacity-50 p-6 rounded-xl hover:transform hover:scale-105 transition-transform">
              <div className="bg-gradient-to-br from-purple-600 to-indigo-600 p-3 rounded-lg inline-block mb-4">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Crystal Magic</h3>
              <p className="text-indigo-200">Harness the power of crystal-based game mechanics</p>
            </div>
          </div>
        </div>
      </section>

      {/* Realms Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">The Alchemist's Journey</h2>
          <p className="text-center text-indigo-200 mb-12 max-w-2xl mx-auto">Choose your realm and begin your mystical transformation</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Fire Realm */}
            <div className="relative overflow-hidden rounded-xl group">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-red-900 z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                alt="Fire Realm" 
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <div className="flex items-center mb-2">
                  <Flame className="h-5 w-5 text-amber-500 mr-2" />
                  <h3 className="text-xl font-bold">Fire Realm</h3>
                </div>
                <p className="text-indigo-100 mb-4">Master the transformative power of flames and forge your destiny</p>
                <button className="bg-red-700 hover:bg-red-600 text-white px-4 py-2 rounded-lg flex items-center text-sm">
                  Begin Journey <ChevronRight className="h-4 w-4 ml-1" />
                </button>
              </div>
            </div>
            
            {/* Water Realm */}
            <div className="relative overflow-hidden rounded-xl group">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900 z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                alt="Water Realm" 
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <div className="flex items-center mb-2">
                  <Droplets className="h-5 w-5 text-blue-400 mr-2" />
                  <h3 className="text-xl font-bold">Water Realm</h3>
                </div>
                <p className="text-indigo-100 mb-4">Flow with the currents of wisdom and healing</p>
                <button className="bg-blue-700 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center text-sm">
                  Begin Journey <ChevronRight className="h-4 w-4 ml-1" />
                </button>
              </div>
            </div>
            
            {/* Earth Realm */}
            <div className="relative overflow-hidden rounded-xl group">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-green-900 z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                alt="Earth Realm" 
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <div className="flex items-center mb-2">
                  <Mountain className="h-5 w-5 text-green-400 mr-2" />
                  <h3 className="text-xl font-bold">Earth Realm</h3>
                </div>
                <p className="text-indigo-100 mb-4">Ground yourself in ancient knowledge and crystal magic</p>
                <button className="bg-green-700 hover:bg-green-600 text-white px-4 py-2 rounded-lg flex items-center text-sm">
                  Begin Journey <ChevronRight className="h-4 w-4 ml-1" />
                </button>
              </div>
            </div>
            
            {/* Air Realm */}
            <div className="relative overflow-hidden rounded-xl group">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-900 z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1534447677768-be436bb09401?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                alt="Air Realm" 
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <div className="flex items-center mb-2">
                  <Wind className="h-5 w-5 text-purple-400 mr-2" />
                  <h3 className="text-xl font-bold">Air Realm</h3>
                </div>
                <p className="text-indigo-100 mb-4">Soar through ethereal winds and celestial mysteries</p>
                <button className="bg-purple-700 hover:bg-purple-600 text-white px-4 py-2 rounded-lg flex items-center text-sm">
                  Begin Journey <ChevronRight className="h-4 w-4 ml-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 px-4 bg-indigo-800 bg-opacity-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
          
          <div className="bg-indigo-900 rounded-xl overflow-hidden shadow-xl">
            <div className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold mb-1">Quantum Blockchain AI</h3>
                  <div className="flex items-center text-amber-400 mb-4">
                    <span className="text-sm mr-2">Karma: 1</span>
                    <div className="w-48 h-2 bg-indigo-700 rounded-full overflow-hidden">
                      <div className="w-1/100 h-full bg-amber-400"></div>
                    </div>
                  </div>
                </div>
                <button className="bg-indigo-700 hover:bg-indigo-600 px-4 py-2 rounded-lg text-sm transition-colors">
                  Visit project
                </button>
              </div>
              <p className="text-indigo-300 mb-2">ai-auto-train-deep-learning-simulations-systems etc</p>
              <p className="text-indigo-400 text-sm">Quantum Blockchain AI, 24d mindmaps system AI assistant etc</p>
            </div>
          </div>
        </div>
      </section>

      {/* Essence Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Essence</h2>
            <p className="text-2xl text-indigo-200">Beautifully Crafted Digital Experience</p>
          </div>
          
          <div className="mb-16">
            <p className="text-xl text-center max-w-3xl mx-auto text-indigo-100">
              Elegance in simplicity. Meticulous attention to detail. A profound commitment to craft the perfect user experience.
            </p>
            <div className="flex justify-center mt-8 space-x-4">
              <button className="bg-amber-500 hover:bg-amber-400 text-indigo-900 font-bold px-6 py-3 rounded-lg transition-colors">
                Explore Products
              </button>
              <button className="border border-indigo-400 hover:border-amber-400 hover:text-amber-400 px-6 py-3 rounded-lg transition-colors">
                Learn More
              </button>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-indigo-800 bg-opacity-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3">Crafted with Precision</h3>
              <p className="text-indigo-200">Our attention to detail and commitment to excellence ensures every interaction feels intentional and refined.</p>
            </div>
            
            <div className="bg-indigo-800 bg-opacity-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3">Lightning Fast</h3>
              <p className="text-indigo-200">Optimized performance ensures a responsive and fluid experience across all devices.</p>
            </div>
            
            <div className="bg-indigo-800 bg-opacity-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3">Beautifully Crafted</h3>
              <p className="text-indigo-200">Every detail meticulously designed to provide an elegant and refined experience.</p>
            </div>
            
            <div className="bg-indigo-800 bg-opacity-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3">Secure & Reliable</h3>
              <p className="text-indigo-200">Built with privacy and security in mind, ensuring your data remains protected.</p>
            </div>
            
            <div className="bg-indigo-800 bg-opacity-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3">Innovative Design</h3>
              <p className="text-indigo-200">Pushing boundaries with forward-thinking design principles and functionality.</p>
            </div>
            
            <div className="bg-indigo-800 bg-opacity-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3">Exceptional Products</h3>
              <p className="text-indigo-200">Discover our collection of meticulously designed products that blend innovation with elegance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-indigo-950 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-6 md:mb-0">
              <Sparkles className="h-6 w-6 text-amber-400" />
              <span className="text-xl font-bold">Crystal Alchemist</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-indigo-300 hover:text-amber-400 transition-colors">Terms</a>
              <a href="#" className="text-indigo-300 hover:text-amber-400 transition-colors">Privacy</a>
              <a href="#" className="text-indigo-300 hover:text-amber-400 transition-colors">Support</a>
              <a href="#" className="text-indigo-300 hover:text-amber-400 transition-colors">Contact</a>
            </div>
          </div>
          <div className="border-t border-indigo-800 mt-8 pt-8 text-center text-indigo-400 text-sm">
            &copy; 2025 Crystal Alchemist. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;