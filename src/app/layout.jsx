import "./globals.css";

export const metadata = {
  title: "Landrup Dans App",
  description: "TerminsProeve",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
