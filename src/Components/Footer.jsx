import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <>
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto max-w-7xl">
          <div className="flex flex-wrap md:text-left text-center order-first">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <Image src="/img/ris.png" alt="" width={100} height={50} />
              <p className="text-gray-500 text-sm mt-5 md:text-left text-center">
                  Fast Wheels, Sharp Skills! 
              </p>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                Company
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <Link href="/" className="text-gray-600 hover:text-gray-800">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-gray-600 hover:text-gray-800">
                    Blog
                  </Link>
                </li>
                {/* <li>
                  <Link href="/" className="text-gray-600 hover:text-gray-800">
                    All Products
                  </Link>
                </li> */}
                <li>
                  <Link href="/" className="text-gray-600 hover:text-gray-800">
                    Locations Map
                  </Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                Services
              </h2>
              <nav className="list-none mb-10">
                
                {/* <li>
                  <Link href="/" className="text-gray-600 hover:text-gray-800">
                    Wish List
                  </Link>
                </li> */}
                <li>
                  <Link href="/" className="text-gray-600 hover:text-gray-800">
                    My account
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-gray-600 hover:text-gray-800">
                    Terms & Conditions
                  </Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                Get in Touch
              </h2>

              <p>
                Subscribe to our weekly Newsletter and receive updates via
                email.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
