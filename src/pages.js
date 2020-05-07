import React from "react";

export const pages = {
  home: {
    title: "Home of best site ever",

    header: {
      title: () => <h2>Home</h2>,
      link: "/",
    },
    pictures: [{ src: "1.jpg", alt: "Picture1" }],
    text: () => (
      <div>
        <h1>Home page</h1>
      </div>
    ),
  },
  about: {
    title: "About of best site ever",
    header: { title: "About", link: "/?page=about" },
    text: () => (
      <div>
        <h1>About page</h1>
      </div>
    ),
  },
};
