import { useParams, Link, useNavigate } from 'react-router';
import { memo } from 'react';

// Reuse the same posts as Blog.tsx for now
const BLOG_POSTS = [
  {
    id: 1,
    title: "Building Modern Web Applications with React and TypeScript",
    content: `This is a detailed article about building modern web applications with React and TypeScript.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod nisi.\n\n## Key Topics\n- React best practices\n- TypeScript patterns\n- Real-world examples\n\n### Conclusion\nReact and TypeScript are a powerful combination for scalable web apps.`,
    excerpt: "Learn how to create scalable, maintainable web applications using React and TypeScript. This comprehensive guide covers best practices, patterns, and real-world examples.",
    author: "Bedir Tuğra Karaabalı",
    date: "March 15, 2024",
    category: "Web Development",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=400&fit=crop",
    tags: ["React", "TypeScript", "Web Development"]
  },
  {
    id: 2,
    title: "The Future of CSS: Modern Layout Techniques",
    content: `Explore the latest CSS features including Grid, Flexbox, and CSS Custom Properties.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit.\n\n## Highlights\n- CSS Grid\n- Flexbox\n- Custom Properties` ,
    excerpt: "Explore the latest CSS features including Grid, Flexbox, and CSS Custom Properties. Discover how these modern techniques are revolutionizing web layout.",
    author: "Bedir Tuğra Karaabalı",
    date: "March 10, 2024",
    category: "CSS",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop",
    tags: ["CSS", "Layout", "Design"]
  },
  // ... (other posts, same as Blog.tsx)
];

const BlogPost = memo(function BlogPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = BLOG_POSTS.find(p => p.id === Number(id));

  if (!post) {
    return (
      <div className="container py-5 text-center">
        <h2 className="mb-3">Post Not Found</h2>
        <p className="text-muted">The blog post you are looking for does not exist.</p>
        <button className="btn btn-primary" onClick={() => navigate(-1)}>Go Back</button>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <div className="mb-4">
        <Link to="/blog" className="btn btn-outline-secondary btn-sm">&larr; Back to Blog</Link>
      </div>
      <div className="card border-0 shadow rounded-4 overflow-hidden mb-4">
        <img src={post.image} alt={post.title} className="w-100" style={{maxHeight: 400, objectFit: 'cover'}} />
        <div className="card-body p-4">
          <div className="d-flex align-items-center mb-2">
            <span className="badge bg-primary me-2">{post.category}</span>
            <small className="text-muted">{post.readTime}</small>
          </div>
          <h2 className="fw-bold mb-2">{post.title}</h2>
          <div className="mb-3">
            <small className="text-muted">By {post.author} &middot; {post.date}</small>
          </div>
          <div className="mb-3">
            {post.tags.map(tag => (
              <span key={tag} className="badge rounded-pill bg-light text-dark me-1 mb-1">{tag}</span>
            ))}
          </div>
          <hr />
          <div className="blog-content" style={{whiteSpace: 'pre-line'}}>
            {post.content}
          </div>
        </div>
      </div>
    </div>
  );
});

export default BlogPost; 