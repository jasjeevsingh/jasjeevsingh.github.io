import React, { useState } from 'react'
import BlogPost from '../../components/BlogPost/BlogPost'
import './Blog.css'

// Sample blog posts data - in a real app, this would come from a CMS or API
const blogPosts = [
  {
    id: 1,
    title: "The Art of Professional Pondering",
    excerpt: "Why taking time to think deeply about problems is not procrastination, but a crucial skill in software development.",
    content: `
There's a misconception in our industry that good developers are those who can immediately start coding when given a problem. But I've found that the best solutions come from those who take time to ponder.

## What is Professional Pondering?

Professional pondering is the deliberate practice of thinking deeply about a problem before rushing to implement a solution. It's about understanding the *why* before diving into the *how*.

When I encounter a new feature request or bug, my first instinct isn't to open my editor. Instead, I:

1. **Understand the problem space** - What are we really trying to solve?
2. **Consider the stakeholders** - Who will be affected by this change?
3. **Think about edge cases** - What could go wrong?
4. **Explore multiple approaches** - What are the trade-offs?

## The Pondering Process

My pondering usually happens away from the computer. I'll take a walk, grab some coffee, or just sit quietly and think. Some of my best architectural decisions have come during these moments of reflection.

This isn't analysis paralysis - it's strategic thinking that saves time in the long run.

## Semi-vibe Coding

Once the pondering is done, the coding becomes more intuitive - what I call "semi-vibe coding." You're in flow because you understand the problem deeply and have a clear mental model of the solution.

The code writes itself because the thinking was done upfront.
    `,
    date: "2025-01-15",
    tags: ["philosophy", "development", "thinking"],
    readTime: "4 min read"
  },
  {
    id: 2,
    title: "Building with Intention: Why I Choose Simple Tools",
    excerpt: "In a world of complex frameworks and tools, sometimes the simplest solution is the most elegant.",
    content: `
Every day, new JavaScript frameworks promise to solve all our problems. New tools emerge claiming to revolutionize how we build software. But I've learned that the best tool is often the simplest one that gets the job done.

## The Complexity Trap

It's easy to get caught up in the latest and greatest. FOMO is real in tech, and nobody wants to be left behind. But complexity has a cost:

- **Learning curve** - Time spent learning tools instead of solving problems
- **Maintenance burden** - More moving parts mean more things that can break
- **Team velocity** - Not everyone needs to learn every new thing

## My Tool Philosophy

I prefer tools that:

1. **Have a single, clear purpose** - Do one thing well
2. **Have stable APIs** - I don't want to rewrite code every few months
3. **Have good documentation** - Learning shouldn't be an archaeological expedition
4. **Have active communities** - Help should be available when needed

## Examples in Practice

For this website, I chose React + Vite instead of a more complex setup. Why?

- React is stable and I know it well
- Vite is fast and has great DX
- Together, they let me focus on content, not configuration

Sometimes boring technology is the best technology.

## The Semi-vibe Approach

This ties back to my "semi-vibe" philosophy. When your tools are simple and familiar, you can code in flow state. You're not fighting the framework - you're expressing ideas.

Choose tools that amplify your thinking, not obscure it.
    `,
    date: "2024-12-28",
    tags: ["tools", "philosophy", "simplicity"],
    readTime: "3 min read"
  },
  {
    id: 3,
    title: "The Chalkboard Aesthetic: Why I Love Retro Computing Vibes",
    excerpt: "Exploring the nostalgic appeal of terminal-inspired design and why it makes me more productive.",
    content: `
There's something magical about the green text on black background aesthetic. It reminds me of the early days of computing, when every character on screen felt intentional and important.

## The Appeal of Terminal Aesthetics

Modern interfaces are often cluttered with gradients, shadows, and animations. While beautiful, they can be distracting. The terminal aesthetic strips away the noise and focuses on what matters: the content.

## My Design Philosophy

When I designed this website, I wanted it to feel like a chalkboard - a place where ideas are sketched, explored, and shared. The monospace fonts, the chalk-like colors, the minimal design - it all serves that purpose.

## Why It Works for Me

1. **Focus** - Less visual noise means more mental clarity
2. **Timelessness** - The aesthetic doesn't go out of style
3. **Authenticity** - It reflects how I actually work (mostly in terminals)
4. **Nostalgia** - It reminds me why I fell in love with computing

## Building the Vibe

Creating this aesthetic wasn't just about colors and fonts. It was about capturing a feeling - the feeling of late-night coding sessions, of discovery, of building something meaningful with simple tools.

Every design choice was intentional, from the typewriter animation to the subtle glow effects. The goal was to create a space that feels both professional and personal.

## The Result

The chalkboard aesthetic isn't just visual flair - it's functional. It creates an environment where I want to write, think, and share ideas. And hopefully, it creates a space where others want to read and engage too.
    `,
    date: "2024-12-10",
    tags: ["design", "aesthetics", "nostalgia"],
    readTime: "3 min read"
  }
]

const Blog = () => {
  const [selectedTag, setSelectedTag] = useState('all')
  const [selectedPost, setSelectedPost] = useState(null)

  // Get all unique tags
  const allTags = ['all', ...new Set(blogPosts.flatMap(post => post.tags))]
  
  // Filter posts by selected tag
  const filteredPosts = selectedTag === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.tags.includes(selectedTag))

  const handlePostClick = (post) => {
    setSelectedPost(post)
  }

  const handleBackClick = () => {
    setSelectedPost(null)
  }

  if (selectedPost) {
    return (
      <div className="blog-container">
        <BlogPost 
          post={selectedPost} 
          onBack={handleBackClick}
        />
      </div>
    )
  }

  return (
    <div className="blog-container">
      <div className="blog-header">
        <h1 className="blog-title">Thoughts & Musings</h1>
        <p className="blog-subtitle">
          Random thoughts from a professional ponderer. Mostly about code, design, and the art of thinking.
        </p>
      </div>

      {/* Tag Filter */}
      <div className="tag-filter">
        <span className="filter-label">Filter by:</span>
        {allTags.map(tag => (
          <button
            key={tag}
            className={`tag-button ${selectedTag === tag ? 'active' : ''}`}
            onClick={() => setSelectedTag(tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Blog Posts Grid */}
      <div className="blog-posts">
        {filteredPosts.map(post => (
          <article key={post.id} className="blog-card" onClick={() => handlePostClick(post)}>
            <div className="blog-card-header">
              <h2 className="blog-card-title">{post.title}</h2>
              <div className="blog-card-meta">
                <span className="blog-date">{new Date(post.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
                <span className="blog-read-time">{post.readTime}</span>
              </div>
            </div>
            <p className="blog-card-excerpt">{post.excerpt}</p>
            <div className="blog-card-tags">
              {post.tags.map(tag => (
                <span key={tag} className="blog-tag">{tag}</span>
              ))}
            </div>
            <div className="blog-card-footer">
              <span className="read-more">Read more →</span>
            </div>
          </article>
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <div className="no-posts">
          <p>No posts found for the selected tag.</p>
        </div>
      )}
    </div>
  )
}

export default Blog
