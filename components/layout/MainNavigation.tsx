import Image from 'next/image';
import Link from 'next/link';

export default function MainNavigation(): JSX.Element {
  return (
    <header className="fixed z-20 w-full bg-white">
      <div className="mx-auto flex max-w-4xl items-center justify-between">
        <Link href="/" className="flex items-center hover:opacity-70">
          <Image
            src="https://cdn.dribbble.com/users/1573719/screenshots/15600616/media/440741778eeb95665204894de5ccec8f.png?compress=1&resize=1200x900&vertical=top"
            alt="logo"
            width={100}
            height={100}
            className="h-auto"
            priority
          />
          <h1 className="text-3xl font-bold uppercase text-gray-600">Howoo</h1>
        </Link>
        <nav>
          <ul className="flex gap-4 text-xl font-bold text-gray-600">
            <li className="hover:text-orange-400">
              <Link href="/posts">Posts</Link>
            </li>
            <li className="hover:text-orange-400">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
