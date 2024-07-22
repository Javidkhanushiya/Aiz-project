import { SpeedInsights } from "@vercel/speed-insights/next";
import "/public/assets/css/bootstrap.min.css";
import 'swiper/css';
import { Kumbh_Sans } from 'next/font/google';
import ClientLayout from './ClientLayout';

const kumbh = Kumbh_Sans({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  adjustFontFallback: false,
  preload: true,
});

export const metadata = {
  title: 'Website Development and Software Company in INDIA - USA',
  description: 'AIZ Infotechs is a website development and software development company in INDIA & USA that provides IT services to turn visions into reality',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${kumbh.className}`}>
        <ClientLayout>
          {children}
          <SpeedInsights />
        </ClientLayout>
      </body>
    </html>
  );
}
