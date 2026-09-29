import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import toast, { Toaster } from 'react-hot-toast';
import ReduxProvider from "@/redux/ReduxProvider";
// import Navbar from "@/components/Navbar/page";
// import Footer from "@/components/Footer/page";

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "ByteSpace - Get Access to Hundreds of Courses Available",
  description: "Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.",
  icons: {
    icon: "/svgs/header_logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@700,600,500&f[]=satoshi@900,700,500,400&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="font-sans antialiased bg-white text-slate-900 selection:bg-[#CBFC01] selection:text-black"
      >
        <ReduxProvider>
          {/* <Navbar /> */}
        {children}
        <Toaster
          position="bottom-right"
          gutter={12}
          toastOptions={{
            duration: 3000,

            style: {
              background: "rgba(10, 26, 47, 0.75)",
              backdropFilter: "blur(10px)",
              color: "#fff",
              borderRadius: "14px",
              border: "1px solid rgba(255,255,255,0.12)",
              boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
              padding: "12px 14px",
              fontSize: "14px",
              fontWeight: 600,
            },


            // Default icon colors (for loading, normal)
            iconTheme: {
              primary: "#A3E635", // brand-green
              secondary: "#0A1A2F",
            },

            success: {
              style: {
                background: "rgba(11, 79, 74, 0.95)", // brand-teal-ish
                border: "1px solid rgba(163, 230, 53, 0.25)",
              },
              iconTheme: { primary: "#A3E635", secondary: "#0b4f4a" },
            },

            error: {
              style: {
                background: "rgba(255, 121, 108, 0.95)", // brand-coral
                border: "1px solid rgba(255,255,255,0.25)",
              },
              iconTheme: { primary: "#FFFFFF", secondary: "#FF796C" },
            },

            loading: {
              style: {
                background: "#0A1A2F",
                border: "1px solid rgba(255,255,255,0.12)",
              },
            },
          }}
        />
        </ReduxProvider>
        <script
          type="text/javascript"
          src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          async
          defer
        ></script>
      </body>
    </html>
  );
}
