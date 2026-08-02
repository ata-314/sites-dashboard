import "./globals.css";

export const metadata = {
  title: "MODD Sites",
  description: "Every MODD site in one place — live previews and repos.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
