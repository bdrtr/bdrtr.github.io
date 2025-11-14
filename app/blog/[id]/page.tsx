'use client';

import { useParams, useRouter } from 'next/navigation';
import { memo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import MainLayout from '../../components/MainLayout';

const BLOG_POSTS = [
  {
    id: 1,
    title: "Building Modern Web Applications with React and TypeScript",
    content: `This is a detailed article about building modern web applications with React and TypeScript.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod nisi.

## Key Topics
- React best practices
- TypeScript patterns
- Real-world examples

### Conclusion
React and TypeScript are a powerful combination for scalable web apps.`,
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
    content: `Explore the latest CSS features including Grid, Flexbox, and CSS Custom Properties.

Lorem ipsum dolor sit amet, consectetur adipiscing elit.

## Highlights
- CSS Grid
- Flexbox
- Custom Properties`,
    excerpt: "Explore the latest CSS features including Grid, Flexbox, and CSS Custom Properties. Discover how these modern techniques are revolutionizing web layout.",
    author: "Bedir Tuğra Karaabalı",
    date: "March 10, 2024",
    category: "CSS",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop",
    tags: ["CSS", "Layout", "Design"]
  },
];

const BlogPost = memo(function BlogPost() {
  const params = useParams();
  const router = useRouter();
  const post = BLOG_POSTS.find(p => p.id === Number(params?.id));

  if (!post) {
    return (
      <MainLayout>
        <div className="container py-5 text-center">
          <h2 className="mb-3">Post Not Found</h2>
          <p className="text-muted">The blog post you are looking for does not exist.</p>
          <button className="btn btn-primary" onClick={() => router.back()}>Go Back</button>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="container py-5">
        <div className="mb-4">
          <Link href="/blog" className="btn btn-outline-secondary btn-sm">&larr; Back to Blog</Link>
        </div>
        <div className="card border-0 shadow rounded-4 overflow-hidden mb-4">
          <div className="position-relative w-100" style={{height: 400}}>
            <Image 
              src={post.image} 
              alt={post.title} 
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </div>
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
    </MainLayout>
  );
});

export default BlogPost;

