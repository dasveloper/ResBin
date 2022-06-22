import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header tw="py-6 flex items-center justify-between space-x-6">
      <Link href="/">
        <a tw="w-24 cursor-pointer">
          <Image src="/logo.svg" width={300} height={70} layout="responsive" />
        </a>
      </Link>
      <Link href="/docs">
        <a>Docs</a>
      </Link>
    </header>
  );
}
