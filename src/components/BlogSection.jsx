import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, User } from 'lucide-react';

const BlogCard = ({
  image,
  title,
  excerpt,
  author,
  authorImage,
  date,
  readTime,
  link,
  isFeature = false
}) => {
  if (isFeature) {
    return (
      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden">
        <div className="md:w-1/2">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-64 md:h-full object-cover"
          />
        </div>
        <div className="md:w-1/2 p-6 flex flex-col justify-between">
          <div>
            <p className="text-gray-500 text-sm mb-2">{date} • {readTime} read</p>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">{title}</h3>
            <p className="text-gray-600 mb-4">{excerpt}</p>
          </div>
          
          <div className="flex items-center justify-between">
            {author && (
              <div className="flex items-center">
                {authorImage ? (
                  <img 
                    src={authorImage} 
                    alt={author} 
                    className="w-8 h-8 rounded-full mr-2"
                  />
                ) : (
                  <User size={18} className="text-gray-600 mr-2" />
                )}
                <span className="text-sm text-gray-600">{author}</span>
              </div>
            )}
            <Link 
              to={link} 
              className="text-[#1e5245] font-medium hover:text-[#2e8b57] transition-colors"
            >
              Read More →
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-row bg-white rounded-lg shadow-md overflow-hidden">
      <div className="w-1/3">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-2/3 p-4 flex flex-col justify-between">
        <div>
          <p className="text-gray-500 text-xs mb-1">{date} • {readTime} read</p>
          <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">{excerpt}</p>
        </div>
        
        <Link 
          to={link} 
          className="text-[#1e5245] text-sm font-medium hover:text-[#2e8b57] transition-colors"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
};

const BlogSection = () => {
  const featuredPost = {
    image: "https://images.pexels.com/photos/7567437/pexels-photo-7567437.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "The Engineering Approach to Market Analysis: A Systematic Trading Framework",
    excerpt: "Learn how to apply engineering principles to develop a robust trading system that removes emotional decision making and focuses on data-driven results.",
    author: "Michael Chen",
    date: "May 5, 2025",
    readTime: "10 min",
    link: "/blog/engineering-approach"
  };

  const recentPosts = [
    {
      image: "https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Risk Management: The Foundation of Consistent Trading",
      excerpt: "Essential risk management principles every trader needs to master for long-term success.",
      date: "May 7, 2025",
      readTime: "8 min",
      link: "/blog/risk-management"
    },
    {
      image: "https://images.pexels.com/photos/7567588/pexels-photo-7567588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Trading Psychology: Managing Emotions in Volatile Markets",
      excerpt: "Practical techniques to maintain emotional discipline during challenging market conditions.",
      date: "May 3, 2025",
      readTime: "7 min",
      link: "/blog/trading-psychology"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-800">
          Blog's
        </h2>
        
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Explore in-depth articles on trading strategies, market analysis, and psychological insights to
          enhance your trading journey.
        </p>
        
        <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
          <div className="w-full md:w-2/3">
            <BlogCard 
              image={featuredPost.image}
              title={featuredPost.title}
              excerpt={featuredPost.excerpt}
              author={featuredPost.author}
              date={featuredPost.date}
              readTime={featuredPost.readTime}
              link={featuredPost.link}
              isFeature={true}
            />
          </div>
          
          <div className="w-full md:w-1/3 space-y-6">
            {recentPosts.map((post, index) => (
              <BlogCard
                key={index}
                image={post.image}
                title={post.title}
                excerpt={post.excerpt}
                date={post.date}
                readTime={post.readTime}
                link={post.link}
              />
            ))}
            
            <div className="text-center mt-6">
              <Link 
                to="/" 
                className="bg-[#1e5245] text-white px-4 py-2 rounded-md inline-block font-medium hover:bg-[#164137] transition-colors text-sm"
              >
                More Blogs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
