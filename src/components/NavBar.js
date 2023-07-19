import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

 const navLink = links.map((links ,index) =>{
  return <a  href={`#${links}`} key={index}>{links}</a>
 })
  return <nav>{navLink}</nav>;
}

export default NavBar;