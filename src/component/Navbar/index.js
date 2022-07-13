import React from "react";
import { Link } from "react-router-dom";
import {
  NavbarSection,
  Logo,
  LogoText,
  UlList,
  Listitem,
  Anchor,
  Input,
  Lab
} from "./style";

const Navbar = () => {
  return (
    <NavbarSection>
      <div className="container">
        <Logo>
          <LogoText>Ultra Profile</LogoText>
        </Logo>
        <Input  className="input" type="checkbox" id="nav" />
        <Lab className="label" for="nav"></Lab>

        <UlList className="ul_list">
          <Listitem>
            <Link className="anchor" to="/">
              Home
            </Link>
          </Listitem>
          <Listitem>
            <Anchor>Work</Anchor>
          </Listitem>
          <Listitem>
            <Anchor>Portfolio</Anchor>
          </Listitem>
          <Listitem>
            <Anchor>Resume</Anchor>
          </Listitem>
          <Listitem>
            <Anchor>About</Anchor>
          </Listitem>
          <Listitem>
            <Link className="anchor" to="/contact">
              contact
            </Link>
          </Listitem>
        </UlList>
      </div>
    </NavbarSection>
  );
};

export default Navbar;
