"use client";

import { useEffect, useState } from "react";

type NavItem = {
  id: string;
  label: string;
};

export function TopNav({ items }: { items: NavItem[] }) {
  const [activeId, setActiveId] = useState(items[0]?.id);

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActiveId(visible.target.id);
        }
      },
      {
        rootMargin: "-25% 0px -60% 0px",
        threshold: [0, 0.5, 1]
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [items]);

  const navigateTo = (id: string) => {
    const target = document.getElementById(id);

    if (!target) {
      return;
    }

    window.scrollTo({
      top: target.getBoundingClientRect().top + window.scrollY - 64,
      behavior: "smooth"
    });
  };

  return (
    <header className="top-nav">
      <a
        className="brand-mark"
        href="#n-top"
        onClick={(event) => {
          event.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <img src="/icons/icon-180.png" alt="" width="34" height="34" />
        <span className="brand-label">
          M. Sandur<span>.</span>
        </span>
      </a>
      <nav aria-label="Primary navigation">
        {items.map((item) => (
          <a
            href={`#${item.id}`}
            key={item.id}
            aria-current={activeId === item.id ? "page" : undefined}
            onClick={(event) => {
              event.preventDefault();
              navigateTo(item.id);
            }}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
