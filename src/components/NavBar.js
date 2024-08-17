import React from "react";
import user from "../data/user";

function NavBar() {
  const home = "home";
  const about = "about";
  const projects = "projects";

  return (
    <nav>
      <a key={user.home} href="#home">home</a>
      <a key={user.about} href="#about">about</a>
      <a key={user.projects} href="#projects">projects</a>
    </nav>
  );
}

export default NavBar;