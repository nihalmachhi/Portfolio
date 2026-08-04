import { notFound } from "next/navigation";
import BlogPostContent from "@/components/pages/blog-post-page";
import { blogPosts, getBlogPost } from "@/data/portfolio";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({
  params,
}: Readonly<{ params: Promise<{ slug: string }> }>) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();
  return <BlogPostContent post={post} />;
}
