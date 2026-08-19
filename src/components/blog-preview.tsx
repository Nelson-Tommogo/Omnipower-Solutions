import Image from "next/image"
import Link from "next/link"

// Simplified blog posts data directly in the component
const previewPosts = [
  {
    id: 1,
    slug: "solar-energy-benefits",
    title: "The Benefits of Solar Energy for Your Home",
    excerpt: "Discover how solar energy can save you money and help the environment.",
    date: "April 15, 2023",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2d9b0cd4-5e14-4bfd-a978-311cd3c56562.jpg-TYTZaLlvR1dINOcf6VG2dGVe29y5bP.jpeg",
  },
  {
    id: 2,
    slug: "home-security-tips",
    title: "Essential Home Security Tips",
    excerpt: "Protect your home and family with these essential security measures.",
    date: "May 22, 2023",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/freepik__the-style-is-candid-image-photography-with-natural__26355-tOlU7XIqRs3hRq6mBrp5ErpZtKWTOM.jpeg",
  },
  {
    id: 3,
    slug: "electrical-safety-home",
    title: "Electrical Safety in Your Home",
    excerpt: "Learn how to prevent electrical hazards and keep your family safe.",
    date: "June 10, 2023",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/freepik__the-style-is-candid-image-photography-with-natural__26353-J4s65jyv6FZSx5HrvokZInknhuyzIx.jpeg",
  },
]

export function BlogPreview() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Latest from Our Blog</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest news, tips, and insights from our experts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {previewPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <div className="relative h-48">
                <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-2 text-sm">{post.date}</p>
                <p className="text-gray-700 mb-4 line-clamp-2">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-blue-600 font-medium hover:underline inline-flex items-center"
                >
                  Read More <span className="ml-1">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/blog"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            View All Posts
          </Link>
        </div>
      </div>
    </section>
  )
}
