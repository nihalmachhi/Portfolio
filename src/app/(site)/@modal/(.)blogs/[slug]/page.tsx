import { notFound } from "next/navigation";
import BlogPostModal from "@/components/pages/blog-post-modal";
import { getBlogPost } from "@/data/portfolio";

export default async function InterceptedBlogPost({
  params,
}: Readonly<{ params: Promise<{ slug: string }> }>) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();
  return <BlogPostModal post={post} />;
}
