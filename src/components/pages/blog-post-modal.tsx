"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import type { BlogPost } from "@/data/portfolio";
import BlogPostArticle from "@/components/pages/blog-post-article";

export default function BlogPostModal({ post }: Readonly<{ post: BlogPost }>) {
  const router = useRouter();

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") router.back();
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [router]);

  return (
    <div
      className="ref-post-overlay"
      role="presentation"
      onClick={(event) => {
        if (event.target === event.currentTarget) router.back();
      }}
    >
      <div className="ref-wrap ref-post-modal" role="dialog" aria-modal="true" aria-labelledby="blog-post-title">
        <div className="ref-modal-topbar">
          <button type="button" className="ref-modal-close" onClick={() => router.back()}>
            <ArrowLeft size={15} aria-hidden="true" /> Back to this page
          </button>
        </div>
        <article className="ref-article">
          <BlogPostArticle post={post} />
        </article>
      </div>
    </div>
  );
}
