import '@/app/ui/global.css';
import { inter, cedarCursive, lusitana } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${lusitana.className}`}>{children}</body>
    </html>
  );
}
