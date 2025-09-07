import "./globals.css";
export const metadata = {
  title: "Ajitesh Sinha",
  description: "Portfolio showcasing mobile development projects",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="dark">
        {children}
      </body>
    </html>
  );
}


