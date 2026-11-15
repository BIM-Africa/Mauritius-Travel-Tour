"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

// Homepage sections reachable from the navbar and footer.
const SECTIONS = new Set(["tours", "transfer"]);

function sectionFromHref(href: string | null): string | null {
  const match = href?.match(/^\/?#([\w-]+)$/);
  return match && SECTIONS.has(match[1]) ? match[1] : null;
}

// Stored outside React so the target survives a full page load.
const PENDING_KEY = "pendingSection";

function savePendingSection(section: string) {
  try {
    sessionStorage.setItem(PENDING_KEY, section);
  } catch {}
}

function takePendingSection(): string | null {
  try {
    const section = sessionStorage.getItem(PENDING_KEY);
    sessionStorage.removeItem(PENDING_KEY);
    return section;
  } catch {
    return null;
  }
}

/**
 * Scrolls to homepage sections without leaving a "#..." in the address bar.
 * Links keep their "/#tours" href so they still work without JavaScript and
 * can be opened in a new tab; the hash is removed once the page has loaded.
 */
export default function SectionLinks() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    function onClick(event: MouseEvent) {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = (event.target as Element | null)?.closest?.("a");
      if (!link || (link.target && link.target !== "_self")) return;

      const href = link.getAttribute("href");
      if (href === "#") {
        event.preventDefault();
        return;
      }

      // Logo / "Home" links: Next.js ignores a click on a link to the page you're already on,
      // so on the homepage scroll back to the top instead.
      if (href === "/" && window.location.pathname === "/") {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      const section = sectionFromHref(href);
      if (!section) return;

      // preventDefault also stops next/link navigating; its onClick (closing the mobile menu) still runs.
      event.preventDefault();
      if (window.location.pathname === "/") {
        document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
      } else {
        savePendingSection(section);
        router.push("/");
      }
    }

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [router]);

  // Next.js writes its own URL into history while hydrating, so the hash is removed just after that.
  useEffect(() => {
    const removeHash = () => {
      if (window.location.hash) {
        window.history.replaceState(window.history.state, "", window.location.pathname + window.location.search);
      }
    };
    const timer = window.setTimeout(removeHash, 100);
    window.addEventListener("hashchange", removeHash);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("hashchange", removeHash);
    };
  }, [pathname]);

  // Finish a scroll that started on another page. Images above the section change
  // its position while they load, so keep it aligned until the page settles.
  useEffect(() => {
    if (pathname !== "/") return;
    const section = takePendingSection();
    if (!section) return;

    let attempts = 0;
    let timer: number | undefined;
    const align = () => {
      const target = document.getElementById(section);
      if (target && Math.abs(target.getBoundingClientRect().top) > 1) {
        target.scrollIntoView({ behavior: "instant" });
      }
      if (++attempts < 30) timer = window.setTimeout(align, 100);
    };
    const stop = () => {
      attempts = Infinity;
    };
    window.addEventListener("wheel", stop, { once: true, passive: true });
    window.addEventListener("touchstart", stop, { once: true, passive: true });
    timer = window.setTimeout(align, 50);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("wheel", stop);
      window.removeEventListener("touchstart", stop);
    };
  }, [pathname]);

  return null;
}
