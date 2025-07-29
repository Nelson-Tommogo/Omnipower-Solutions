import { blogPosts } from "@/lib/blog-data"
import Image from "next/image"
import Link from "next/link"

export default function BlogPage() {
  return (
    <>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">Our Blog</h1>
        <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
          Stay updated with the latest news, tips, and insights from <em>Omnipower Solutions</em>. Our experts share
          valuable information to help you make informed decisions about your electrical and security needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <div className="relative h-64">
                <Image
                  src={post.image || "/images/blog-placeholder.jpg"}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
                <p className="text-gray-600 mb-4">
                  <span className="mr-4">{post.date}</span>
                  <span>By {post.author}</span>
                </p>
                <p className="text-gray-700 mb-4">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
