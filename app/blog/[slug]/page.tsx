import { blogPosts } from "@/lib/blog-data"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((post) => post.slug === params.slug)

  if (!post) {
    return notFound()
  }

  return (
    <>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Link href="/blog" className="inline-flex items-center text-blue-600 mb-8 hover:underline">
            ← Back to all posts
          </Link>

          <div className="relative h-96 w-full mb-8">
            <Image
              src={post.image || "/images/blog-placeholder.jpg"}
              alt={post.title}
              fill
              className="object-cover rounded-lg"
            />
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-gray-600 mb-4">
              <span className="mr-4">{post.date}</span>
              <span>By {post.author}</span>
            </div>

            <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />

            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-xl font-bold mb-4">Share this article 📢</h3>
              <div className="flex space-x-4">
                <button className="text-blue-600 hover:text-blue-800">Facebook</button>
                <button className="text-blue-400 hover:text-blue-600">Twitter</button>
                <button className="text-blue-700 hover:text-blue-900">LinkedIn</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
