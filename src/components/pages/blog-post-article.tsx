import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { blogPosts, type BlogPost } from "@/data/portfolio";

export default function BlogPostArticle({ post }: Readonly<{ post: BlogPost }>) {
  const morePosts = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 2);

  return (
    <>
      <p className="ref-article-meta">{post.date} {"\u00b7"} {post.readTime}</p>
      <h2 className="ref-route-title" id="blog-post-title">{post.title}</h2>
      <div className="ref-article-tags">
        {post.tags.map((tag) => <span key={tag}>{tag}</span>)}
      </div>
      <div className="ref-article-body">
        {post.content.map((paragraph) => <p key={paragraph.slice(0, 40)}>{paragraph}</p>)}
      </div>
      <section className="ref-more-reading" aria-label="More to read">
        <h3>More to read</h3>
        <div>
          {morePosts.map((item) => (
            <Link className="ref-more-reading-link" key={item.slug} href={`/blogs/${item.slug}`}>
              <span>{item.title}</span><ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
