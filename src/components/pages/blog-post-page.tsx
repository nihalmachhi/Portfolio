import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { type BlogPost } from "@/data/portfolio";
import WritingRouteHeader from "@/components/pages/writing-route-header";
import BlogPostArticle from "@/components/pages/blog-post-article";

export default function BlogPostContent({ post }: Readonly<{ post: BlogPost }>) {
  return (
    <main className="ref-wrap">
      <WritingRouteHeader currentPage="article" />
      <article className="ref-article">
        <Link href="/blogs" className="ref-article-back">
          <ArrowLeft size={15} aria-hidden="true" />
          All writing
        </Link>
        <BlogPostArticle post={post} />
      </article>
    </main>
  );
}
