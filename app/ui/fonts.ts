import { Inter, Cedarville_Cursive, Lusitana } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });

export const cedarCursive = Cedarville_Cursive({
  subsets: ['latin'],
  weight: ['400'],
});

export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});
