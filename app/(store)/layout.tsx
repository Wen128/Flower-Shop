import Footer from "@/src/components/Footer";
import { Navbar } from "@/src/components/Navbar";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
    >
        <Navbar />
      <body className="bg-[#F7F7F7]">
        {children}
      </body>
      <Footer />
    </html>
  );
}