import { Lato } from "next/font/google";
import type { ReactNode } from "react";
import "../styles/globals.css";

const font = Lato({
  weight: ["400", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

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
      <body className={font.className}>{children}</body>
    </html>
  );
}
