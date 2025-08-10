import { useEffect } from "react";
import { Footer } from "./elements/Footer";
import { Navbar } from "./elements/Navbar";

interface LayoutProps {
  title: string;
  logo: string;
  children: React.ReactNode;
}

export const Layout = ({ title, children, logo }: LayoutProps) => {
  useEffect(() => {
    document.title = title;
    if (logo) {
      let link = document.querySelector("link[rel~='icon']") as HTMLLinkElement | null; 
      if (!link || link.href !== logo) {
        if (!link) {
          link = document.createElement("link");
          link.rel = "icon";
          document.head.appendChild(link);
        }
        link.type = "image/x-icon";
        link.href = logo;
      }
    }    
  }, [title, logo]);
  return (
    <>
      <Navbar />

      <main className="flex flex-col gap-y-20 md:gap-y-32 overflow-hidden bg-body text-heading-1 transition-colors">
        {children ?? <div>Loading ...</div>}
      </main>

      <Footer />
    </>
  );
};