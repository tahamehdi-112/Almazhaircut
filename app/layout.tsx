import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Almaz Haircut | Premium Friseur in Stuttgart',
  description: 'Almaz Haircut bietet exklusive Haarschnitte, Bartpflege und Styling in modernem Ambiente in Stuttgart.',
  keywords: 'Friseur Stuttgart, Herrenhaarschnitt, Bart Styling, Premium Friseur',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="de" className={`${inter.variable} scroll-smooth`}>
      <body className="bg-black text-white font-sans antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
