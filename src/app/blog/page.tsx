import Link from "next/link";

const blogPosts = [
  { id: 1, title: "Getting Started with React", date: "2023-06-01" },
  { id: 2, title: "The Power of Next.js", date: "2023-06-15" },
  { id: 3, title: "CSS-in-JS: A New Paradigm", date: "2023-07-01" },
];

export default function Blog() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">My Blog</h1>
        <div className="space-y-6">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">
                <Link
                  href={`/blog/${post.id}`}
                  className="text-blue-600 hover:underline"
                >
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-500">{post.date}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
