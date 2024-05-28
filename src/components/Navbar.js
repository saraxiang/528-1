import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          <Link href="/">
            <a>CharTracker</a>
          </Link>
        </div>
        <div className="space-x-4">
          <Link href="/dashboard">
            <a className="text-gray-300 hover:text-white">Dashboard</a>
          </Link>
          <Link href="/create-character">
            <a className="text-gray-300 hover:text-white">Create a Character</a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
