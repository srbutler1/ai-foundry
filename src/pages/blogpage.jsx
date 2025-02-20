import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { MessageCircle, X } from 'lucide-react';
import { blogPosts } from '../data/blogpost.js'; 

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-black/80 border border-red-900/50 rounded-lg p-6 max-w-lg w-full mx-4 relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-400 hover:text-red-500 transition-colors"
        >
          <X size={20} />
        </button>
        {children}
      </div>
    </div>
  );
};

const EventBanner = () => (
  <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 mt-4">
    <p className="text-red-400 text-sm font-medium">
      🎉 Join us at our first in-person event to learn more about DeepSeek and the future of AI! Click the article to learn more!
    </p>
  </div>
);

const EventModal = ({ onClose }) => (
  <div className="text-center">
    <h3 className="text-2xl font-bold text-red-500 mb-4">Join Our First In-Person Event!</h3>
    <p className="text-zinc-200 mb-6">
      Get an exclusive deep dive into DeepSeek's groundbreaking developments and network with AI enthusiasts at our first event.
    </p>
    <div className="space-y-4">
      <div className="bg-black/40 rounded p-4">
        <h4 className="text-red-400 font-medium mb-2">Event Details</h4>
        <p className="text-zinc-300">Date: 2/13/2025</p>
        <p className="text-zinc-300">Time: 6:00pm - 7:00pm</p>
        <p className="text-zinc-300">Location: Reyonlds Center Auditorium Room 120, 145 N Buchanan Ave Fayetteville, AR 72701</p>
      </div>
    </div>
  </div>
);

const BlogPost = ({ id, title, author, date, content, tags, isExpanded, onClick }) => {
  const [showModal, setShowModal] = useState(false);
  
  // Get preview content - first non-header paragraph
  const getPreviewContent = (markdown) => {
    const paragraphs = markdown.split('\n').filter(line => 
      line.trim() && !line.startsWith('#') && !line.startsWith('*') && !line.startsWith('![')
    );
    return paragraphs[0] || '';
  };

  const previewContent = getPreviewContent(content);

  const handleClick = () => {
    if (!isExpanded && id === 3) { // Show modal only for DeepSeek article
      setShowModal(true);
    }
    onClick(id);
  };
  
  return (
    <>
      <div 
        className={`bg-black/40 border border-red-900/50 backdrop-blur-md rounded-lg overflow-hidden hover:border-red-500/50 transition-all duration-300 cursor-pointer ${isExpanded ? 'md:col-span-2' : ''}`}
        onClick={handleClick}
      >
        <div className="p-6">
          <h3 className="text-xl font-bold text-red-500 mb-2">{title}</h3>
          <div className="flex items-center text-zinc-400 mb-4 text-sm">
            <span>{new Date(date).toLocaleDateString()}</span>
            <span className="mx-2">•</span>
            <span>{author}</span>
          </div>
          <div className="text-zinc-200">
            {isExpanded ? (
              <ReactMarkdown 
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]}
                className="space-y-4"
                components={{
                  h1: ({node, ...props}) => <h1 className="text-2xl font-bold text-red-500" {...props} />,
                  h2: ({node, ...props}) => <h2 className="text-xl font-bold text-red-500" {...props} />,
                  h3: ({node, ...props}) => <h3 className="text-lg font-bold text-red-500" {...props} />,
                  p: ({node, ...props}) => <p className="text-zinc-200" {...props} />,
                  ul: ({node, ...props}) => <ul className="list-disc pl-6 space-y-2" {...props} />,
                  ol: ({node, ...props}) => <ol className="list-decimal pl-6 space-y-2" {...props} />,
                  li: ({node, ...props}) => <li className="text-zinc-200" {...props} />,
                  code: ({node, ...props}) => <code className="text-red-300 bg-black/30 px-1 rounded" {...props} />,
                  a: ({node, ...props}) => <a className="text-red-400 hover:text-red-300" {...props} />,
                  img: ({node, ...props}) => (
                    <div className="flex justify-center mb-8">
                      <img {...props} className="rounded-lg shadow-lg max-w-3xl w-full" />
                    </div>
                  )
                }}
              >
                {content}
              </ReactMarkdown>
            ) : (
              <>
                <ReactMarkdown 
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeRaw]}
                  className="mb-4"
                  components={{
                    img: ({node, ...props}) => (
                      <img {...props} className="rounded-lg w-full h-48 object-cover mb-4" />
                    )
                  }}
                >
                  {content.split('\n').slice(0, 3).join('\n')}
                </ReactMarkdown>
                <ReactMarkdown 
                  remarkPlugins={[remarkGfm]}
                  className="line-clamp-3"
                  components={{
                    p: ({node, ...props}) => <p className="text-zinc-200" {...props} />,
                  }}
                >
                  {previewContent}
                </ReactMarkdown>
                {id === 3 && <EventBanner />} {/* Show banner only for DeepSeek article */}
              </>
            )}
          </div>
          {tags && (
            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map(tag => (
                <span 
                  key={tag} 
                  className="px-2 py-1 bg-red-500/20 text-red-400 rounded-md text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          <div className="mt-4 text-red-500 text-sm">
            {isExpanded ? 'Click to collapse' : 'Click to read more'}
          </div>
        </div>
      </div>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <EventModal onClose={() => setShowModal(false)} />
      </Modal>
    </>
  );
};

const BlogSearch = ({ onSearch }) => (
  <div className="relative mb-8">
    <input
      type="text"
      placeholder="Search blog posts..."
      onChange={(e) => onSearch(e.target.value)}
      className="w-full px-4 py-2 bg-black/40 border border-red-900/50 rounded-md text-white placeholder-zinc-500 focus:outline-none focus:border-red-500/50"
    />
    <MessageCircle className="absolute right-3 top-2.5 h-5 w-5 text-zinc-500" />
  </div>
);

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedPostId, setExpandedPostId] = useState(null);

  const filteredPosts = [...blogPosts]
    .sort((a, b) => new Date(b.date) - new Date(a.date))  // Sort by date, latest first
    .filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.tags?.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-800">
            AI Foundry Blog
          </h1>
          <p className="text-zinc-300 text-lg">
            Stay updated with the latest in AI innovation, student projects, and industry insights
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <BlogSearch onSearch={setSearchTerm} />
          
          {searchTerm && (
            <p className="text-zinc-400 mb-8">
              {filteredPosts.length} {filteredPosts.length === 1 ? 'result' : 'results'} found
            </p>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredPosts.map((post) => (
              <BlogPost 
                key={post.id} 
                {...post} 
                isExpanded={expandedPostId === post.id}
                onClick={(id) => setExpandedPostId(expandedPostId === id ? null : id)}
              />
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-zinc-400">No blog posts found matching your search.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
