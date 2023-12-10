'use client';

import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';

export default function AppNav() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <nav className="relative flex justify-center items-center bg-white py-3 px-5">
      {pathname !== '/' && (
        <button
          onClick={() => router.back()}
          className="absolute bottom-5 left-5"
        >
          <svg
            width="16"
            height="14"
            viewBox="0 0 16 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 1L1 7L7 13"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M1 7H14.7143"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      )}
      <Link href="/">
        <Image
          src="/assets/images/logo.svg"
          width={181}
          height={43}
          alt="Logo"
          className="mx-auto"
        />
      </Link>
    </nav>
  );
}
