import clsx from 'clsx';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { usePage } from '@inertiajs/react';

const Navbar = () => {
  const { url } = usePage(); 
  const [isScrolled, setIsScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Beranda', href: '/' },
    { label: 'Profil Desa', href: '/profil' },
    { label: 'Infografis', href: '/infografis' },
    { label: 'Galeri', href: '/galeri' },
    { label: 'Berita', href: '/berita' },
  ];

  const isHome = url === '/';

  return (
    <>
      <nav
        className={clsx(
          'fixed top-0 left-0 z-50 w-full transition-all duration-300 font-poppins p-2',
          isHome
            ? isScrolled
              ? 'bg-primary shadow-md backdrop-blur-md'
              : 'bg-transparent'
            : 'bg-primary shadow-md backdrop-blur-md'
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-10">
          {/* Logo */}
          <div className="flex items-center gap-2  text-white ">
            <img src="/logo.svg" alt="Logo" className="w-10" />
            <div className="flex flex-col">
              <p className='md:text-xl font-semibold'>Desa Tonjong</p>
              <p>Tajurhalang, Bogor</p>
            </div>
          </div>

          {/* Menu Desktop */}
          <ul className="hidden items-center space-x-8 text-white md:flex font-bold">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="relative pb-1 transition-all duration-200 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Tombol menu mobile */}
          <button
            className="text-white md:hidden"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-7 w-7" />
          </button>
        </div>
      </nav>

      {/* Overlay sidebar mobile */}
      <div
        className={clsx(
          'fixed inset-0 z-40 bg-black/50 transition-opacity duration-300',
          sidebarOpen ? 'visible opacity-100' : 'invisible opacity-0'
        )}
        onClick={() => setSidebarOpen(false)}
      ></div>

      {/* Sidebar mobile */}
      <div
        className={clsx(
          'fixed top-0 left-0 z-50 h-full w-64 transform bg-white shadow-lg transition-transform duration-300',
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="flex items-center justify-between border-b p-4">
          <h2 className="text-xl font-bold text-gray-800">Menu</h2>
          <button
            onClick={() => setSidebarOpen(false)}
            className="text-gray-800"
            aria-label="Close menu"
          >
            <X className="h-7 w-7" />
          </button>
        </div>

        <ul className="flex flex-col space-y-4 p-4 font-medium text-gray-700">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={() => setSidebarOpen(false)}
                className="block border-b border-transparent pb-1 transition-all duration-200 hover:border-gray-400"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
