import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div tw="min-h-screen flex flex-col space-y-4 w-full max-w-4xl mx-auto px-6">
      <Header />
      <main tw="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
