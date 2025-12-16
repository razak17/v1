import type { ReactNode } from "react";

import { fontMono, fontSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import "../styles/globals.css";

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import ToastWrapper from "@/components/toast-wrapper";

export const metadata = {
  title: {
    default: "Razak Mo",
    template: "%s | Razak Mo",
  },
  description: "Razak Mo | Full Stack Software developer.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontMono.variable,
        )}
      >
        <Navbar />
        {children}
        <Footer />
        <ToastWrapper />
      </body>
    </html>
  );
}
