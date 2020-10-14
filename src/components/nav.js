import React from "react"

import tw, { styled } from "twin.macro"

import Logo from "../images/logo-symbol.inline.svg";

const Nav = () => (
  <PageNav>
    <LogoContainer>
      <Logo />
    </LogoContainer>
  </PageNav>
)

const PageNav = styled.nav`
  ${tw`fixed top-0 left-0 w-full flex justify-center bg-white bg-opacity-50   p-2`}
`;

const LogoContainer = styled.div`
  ${tw`w-8`}
`;

export default Nav
