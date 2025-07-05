import { memo, useState } from "react";
import { Link } from "react-router";

const BLOG_POSTS = [
  {
    id: 1,
    title: "Building Modern Web Applications with React and TypeScript",
    excerpt: "Learn how to create scalable, maintainable web applications using React and TypeScript. This comprehensive guide covers best practices, patterns, and real-world examples.",
    author: "Bedir Tuğra Karaabalı",
    date: "March 15, 2024",
    category: "Web Development",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=250&fit=crop",
    featured: true,
    tags: ["React", "TypeScript", "Web Development"]
  },
  {
    id: 2,
    title: "The Future of CSS: Modern Layout Techniques",
    excerpt: "Explore the latest CSS features including Grid, Flexbox, and CSS Custom Properties. Discover how these modern techniques are revolutionizing web layout.",
    author: "Bedir Tuğra Karaabalı",
    date: "March 10, 2024",
    category: "CSS",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop",
    featured: false,
    tags: ["CSS", "Layout", "Design"]
  },
  {
    id: 3,
    title: "Optimizing Performance in Next.js Applications",
    excerpt: "Discover advanced techniques for optimizing Next.js applications. From code splitting to image optimization, learn how to build lightning-fast web apps.",
    author: "Bedir Tuğra Karaabalı",
    date: "March 5, 2024",
    category: "Performance",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop",
    featured: false,
    tags: ["Next.js", "Performance", "Optimization"]
  },
  {
    id: 4,
    title: "State Management in React: From Context to Redux",
    excerpt: "A deep dive into state management solutions for React applications. Compare Context API, Redux, Zustand, and other popular state management libraries.",
    author: "Bedir Tuğra Karaabalı",
    date: "February 28, 2024",
    category: "React",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop",
    featured: false,
    tags: ["React", "State Management", "Redux"]
  },
  {
    id: 5,
    title: "Building Accessible Web Applications",
    excerpt: "Learn how to create web applications that are accessible to all users. This guide covers WCAG guidelines, semantic HTML, and testing tools.",
    author: "Bedir Tuğra Karaabalı",
    date: "February 20, 2024",
    category: "Accessibility",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop",
    featured: false,
    tags: ["Accessibility", "WCAG", "Inclusive Design"]
  },
  {
    id: 6,
    title: "The Complete Guide to API Design",
    excerpt: "Master the art of designing RESTful APIs. Learn about HTTP methods, status codes, authentication, and best practices for building robust APIs.",
    author: "Bedir Tuğra Karaabalı",
    date: "February 15, 2024",
    category: "Backend",
    readTime: "15 min read",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop",
    featured: false,
    tags: ["API", "REST", "Backend"]
  }
];

const CATEGORIES = [
  "All",
  "Web Development",
  "React",
  "CSS",
  "Performance",
  "Accessibility",
  "Backend"
];

const Blog = memo(function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = BLOG_POSTS.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPost = BLOG_POSTS.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="container py-5">
      {/* Header */}
      <div className="text-center mb-5">
        <h1 className="display-5 fw-bolder mb-0">
          <span className="text-gradient d-inline">Blog</span>
        </h1>
        <p className="lead text-muted mt-2">Thoughts, tutorials, and insights about web development</p>
      </div>

      {/* Search and Filter */}
      <div className="row mb-5">
        <div className="col-md-6 mb-3">
          <div className="input-group">
            <span className="input-group-text bg-light border-end-0">
              <i className="bi bi-search"></i>
            </span>
            <input
              type="text"
              className="form-control border-start-0"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="d-flex flex-wrap gap-2">
            {CATEGORIES.map(category => (
              <button
                key={category}
                className={`btn btn-sm ${selectedCategory === category ? 'btn-primary' : 'btn-outline-primary'}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Post */}
      {featuredPost && selectedCategory === "All" && searchTerm === "" && (
        <div className="mb-5">
          <h3 className="fw-bold mb-3">Featured Post</h3>
          <div className="card border-0 shadow rounded-4 overflow-hidden">
            <div className="row g-0">
              <div className="col-md-4">
                <img src={featuredPost.image} alt={featuredPost.title} className="w-100 h-100" style={{objectFit: 'cover'}} />
              </div>
              <div className="col-md-8">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-2">
                    <span className="badge bg-primary me-2">{featuredPost.category}</span>
                    <small className="text-muted">{featuredPost.readTime}</small>
                  </div>
                  <h4 className="fw-bold mb-2">{featuredPost.title}</h4>
                  <p className="text-muted mb-3">{featuredPost.excerpt}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <small className="text-muted">By {featuredPost.author}</small>
                      <br />
                      <small className="text-muted">{featuredPost.date}</small>
                    </div>
                    <Link className="btn btn-primary" to={`/blog/${featuredPost.id}`}>Read More</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Regular Posts */}
      <div className="row g-4">
        {regularPosts.map(post => (
          <div className="col-md-6 col-lg-4" key={post.id}>
            <div className="card h-100 border-0 shadow rounded-4 blog-card">
              <img src={post.image} alt={post.title} className="card-img-top" style={{height: 200, objectFit: 'cover'}} />
              <div className="card-body d-flex flex-column">
                <div className="d-flex align-items-center mb-2">
                  <span className="badge bg-secondary me-2">{post.category}</span>
                  <small className="text-muted">{post.readTime}</small>
                </div>
                <h5 className="fw-bold mb-2">{post.title}</h5>
                <p className="text-muted mb-3 flex-grow-1">{post.excerpt}</p>
                <div className="mb-3">
                  {post.tags.map(tag => (
                    <span key={tag} className="badge rounded-pill bg-light text-dark me-1 mb-1">{tag}</span>
                  ))}
                </div>
                <div className="d-flex justify-content-between align-items-center mt-auto">
                  <div>
                    <small className="text-muted">By {post.author}</small>
                    <br />
                    <small className="text-muted">{post.date}</small>
                  </div>
                  <Link className="btn btn-outline-primary btn-sm" to={`/blog/${post.id}`}>Read More</Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* No Results */}
      {filteredPosts.length === 0 && (
        <div className="text-center py-5">
          <i className="bi bi-search display-1 text-muted mb-3"></i>
          <h4 className="text-muted">No articles found</h4>
          <p className="text-muted">Try adjusting your search or filter criteria</p>
        </div>
      )}
    </div>
  );
});

export default Blog; 