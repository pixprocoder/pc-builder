import Providers from "@/lib/Providers";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Providers>
        <body>
          <Navbar />
          <main
            style={{
              maxWidth: "1400px",
              margin: "0 auto",
            }}
          >
            {children}
          </main>
        </body>
      </Providers>
    </html>
  );
}
