import React from "react";
import Link from "next/link";
import { pages } from "./pages";

export const Header = React.memo(() => {
  const sections = Object.keys(pages);

  return (
    <header style={{ display: "flex", alignItems: "center" }}>
      {sections.map((section) => {
        const { link, title } = pages[section].header;

        const Title = typeof title !== "string" ? title : () => title;

        return (
          <Link key={section} href={link}>
            <a>
              <Title />
            </a>
          </Link>
        );
      })}
    </header>
  );
});
