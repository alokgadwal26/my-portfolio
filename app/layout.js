import { Outfit } from 'next/font/google';
import './globals.css';

const font = Outfit({ subsets: ['latin'], display: 'swap' });

export const metadata = {
  title: 'Alok Gadwal | About Me',
  description: 'Web Designer and UI UX Designer portfolio.',
};
export const viewport = { width: 'device-width', initialScale: 1 };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
