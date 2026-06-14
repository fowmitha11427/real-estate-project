import { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, ArrowRight, Search } from 'lucide-react';
import { blogPosts } from '../lib/data';
import { useTheme } from '../lib/context';

const categories = ['All', 'Luxury Living', 'Market Trends', 'Investment Guides', 'Interior Design'];

export default function BlogSection() {
  const { isDark } = useTheme();
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="blog" className={`py-24 md:py-32 ${isDark ? 'bg-black-luxury' : 'bg-gray-light'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-gold" />
            <span className="text-gold text-sm tracking-[0.3em] uppercase">Insights</span>
            <div className="w-8 h-[1px] bg-gold" />
          </div>
          <h2 className={`font-[Playfair_Display] text-3xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black-luxury'}`}>
            The Aurevia Journal
          </h2>
          <p className={`max-w-2xl mx-auto text-lg ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
            Expert insights, market analysis, and luxury living inspiration.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-gold text-black-luxury'
                    : isDark
                      ? 'bg-white/5 text-white/60 hover:text-gold border border-white/10'
                      : 'bg-white text-gray-600 hover:text-gold border border-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="relative">
            <Search size={16} className={`absolute left-3 top-1/2 -translate-y-1/2 ${isDark ? 'text-white/40' : 'text-gray-400'}`} />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`pl-10 pr-4 py-2.5 rounded-xl text-sm w-64 transition-all focus:outline-none focus:ring-2 focus:ring-gold/30 ${
                isDark ? 'bg-white/5 text-white border border-white/10 placeholder-white/30' : 'bg-white text-gray-800 border border-gray-200 placeholder-gray-400'
              }`}
            />
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredPosts.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`group rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl ${
                isDark
                  ? 'bg-white/[0.02] border border-white/5 hover:border-gold/20 hover:shadow-gold/10'
                  : 'bg-white border border-gray-100 hover:border-gold/30 hover:shadow-gold/10'
              }`}
            >
              <div className="flex flex-col sm:flex-row">
                <div className="sm:w-48 h-48 sm:h-auto overflow-hidden flex-shrink-0">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 flex flex-col justify-between">
                  <div>
                    <span className="text-gold text-xs font-semibold tracking-wider uppercase">{post.category}</span>
                    <h3 className={`font-[Playfair_Display] text-lg font-bold mt-2 mb-2 group-hover:text-gold transition-colors line-clamp-2 ${
                      isDark ? 'text-white' : 'text-black-luxury'
                    }`}>
                      {post.title}
                    </h3>
                    <p className={`text-sm line-clamp-2 ${isDark ? 'text-white/50' : 'text-gray-500'}`}>
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-3">
                      <span className={`text-xs ${isDark ? 'text-white/40' : 'text-gray-400'}`}>{post.date}</span>
                      <div className="flex items-center gap-1">
                        <Clock size={12} className={isDark ? 'text-white/40' : 'text-gray-400'} />
                        <span className={`text-xs ${isDark ? 'text-white/40' : 'text-gray-400'}`}>{post.readTime}</span>
                      </div>
                    </div>
                    <ArrowRight size={16} className="text-gold opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <p className={`text-lg ${isDark ? 'text-white/40' : 'text-gray-400'}`}>No articles found matching your criteria.</p>
          </div>
        )}
      </div>
    </section>
  );
}
