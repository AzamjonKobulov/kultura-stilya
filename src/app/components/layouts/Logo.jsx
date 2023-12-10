import Image from 'next/image';
import Link from 'next/link';

export default function LogoNav() {
  return (
    <nav className="py-3">
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
