import HomePage from "./home/page";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode | any;
}) {
  return (
    <main>
      {children}
      <HomePage />
    </main>
  );
}
