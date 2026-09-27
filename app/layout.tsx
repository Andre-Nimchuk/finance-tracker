import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Finance Tracker",
  description: "Personal finance and savings tracker",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="h-full antialiased" lang="uk">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
