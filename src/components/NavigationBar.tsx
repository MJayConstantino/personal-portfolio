import Link from "next/link";

export function NavigationBar() {
  return (
    <nav className="bg-gray-800 text-white p-4 sticky">
      <ul className="flex justify-center space-x-6">
        <li>
          <Link href="/" className="hover:text-gray-300">
            Home
          </Link>
        </li>
        <li>
          <Link href="#about" className="hover:text-gray-300">
            About
          </Link>
        </li>
        <li>
          <Link href="#projects" className="hover:text-gray-300">
            Projects
          </Link>
        </li>
        <li>
          <Link href="#experience" className="hover:text-gray-300">
            Experience
          </Link>
        </li>
        <li>
          <Link href="/blog" className="hover:text-gray-300">
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  );
}
