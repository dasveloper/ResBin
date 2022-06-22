import Link from "next/link";
import { BrandGithub } from "tabler-icons-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer tw="py-6 md:flex md:items-center md:justify-between text-gray-400 hover:text-gray-500">
      <div tw="flex space-x-6 md:order-2">
        <a
          href="https://github.com/dasveloper/ResBin"
          target="_blank"
          rel="noreferrer noopener"
        >
          <span tw="sr-only">ResBin Github</span>
          <BrandGithub tw="h-6 w-6" aria-hidden="true" />
        </a>
      </div>
      <p tw="flex items-end mt-4 md:mt-0 md:order-1 gap-4">
        &copy; {currentYear} ResBin
        <Link href="/terms">
          <a>Terms of service</a>
        </Link>
      </p>
    </footer>
  );
}
