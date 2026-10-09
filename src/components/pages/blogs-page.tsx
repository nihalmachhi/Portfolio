import Link from "next/link";
import { blogPosts } from "@/data/portfolio";
import WritingRouteHeader from "@/components/pages/writing-route-header";

export default function BlogsPageContent() {
  return (
    <main className="ref-wrap">
      <WritingRouteHeader currentPage="writing" />
      <section className="ref-page ref-writing-route" aria-label="Writing">
        <h2 className="ref-route-title">Writing <i>&amp; notes</i></h2>
        <p className="ref-route-intro">
          Notes on building products, engineering systems, and the lessons I&apos;m learning along the way.
        </p>
        <div className="ref-post-list">
          {blogPosts.map((post) => (
            <Link className="ref-post-link" href={`/blogs/${post.slug}`} key={post.slug}>
              <span className="ref-post-main">
                <b>{post.title}</b>
                <span className="ref-post-blurb">{post.blurb}</span>
                <span className="ref-post-meta">{post.tags.join(" / ")} {"\u00b7"} {post.readTime}</span>
              </span>
              <time className="ref-date">{post.date}</time>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
