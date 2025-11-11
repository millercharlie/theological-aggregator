import SearchBar from "@components/SearchBar";
import styled from "@emotion/styled";
import * as Typography from "@libs/Typography";
import {
  AccountCircle,
  DefaultIcon as LogoImage,
  DefaultIcon as Icon,
} from "@libs/Icons";

import { Theme, type ColorTheme } from "@libs/Types";
import React from "react";
import { Colors } from "@libs/globals";

const links: { id: string; pretty: string; link: string }[] = [
  {
    id: "dashboard",
    pretty: "Dashboard",
    link: "/dashboard",
  },
  {
    id: "theology",
    pretty: "Theology",
    link: "/theology",
  },
  {
    id: "commentary",
    pretty: "Bible Commentary",
    link: "/commentary",
  },
  {
    id: "apologetics",
    pretty: "Apologetics",
    link: "/apologetics",
  },
  {
    id: "glossary",
    pretty: "Glossary/Index",
    link: "/glossary",
  },
];

// TODO: The color here should be taken from the global.ts file
const Container = styled.div<{ theme: ColorTheme }>`
  background-color: ${({ theme }) => theme.navBar};
  display: flex;
  padding-left: 30px;
  padding-right: 30px;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
`;

const NavLinksContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;
// TODO: Color here should also be dynamic
const NavItem = styled(Typography.NavigationLink)<{
  highlighted?: boolean;
  theme: ColorTheme;
}>`
  cursor: pointer;
  text-wrap: nowrap;
  transition: all 0.2s;
  color: ${({ highlighted, theme }) =>
    highlighted ? theme.navHighlight : theme.text};
  :hover {
    color: ${({ theme }) => theme.secondary};
  }
`;

const DesktopNavigationBar: React.FC<{
  highlighted: string;
  theme: ColorTheme;
  setTheme: React.Dispatch<React.SetStateAction<ColorTheme>>;
}> = ({ highlighted, theme, setTheme }) => {
  return (
    <Container theme={theme}>
      <NavLinksContainer>
        <NavItem theme={theme}>
          <LogoImage src="src/assets/logos/logo.svg" width={32} height={32} />
        </NavItem>
        {links.map((link) => (
          <NavItem
            id={link.id}
            key={link.id}
            highlighted={link.id === highlighted}
            theme={theme}
          >
            {link.pretty}
          </NavItem>
        ))}
      </NavLinksContainer>
      <SearchBar />
      <Icon
        src={
          theme.id === Theme.DARK
            ? "src/assets/icons/sun.svg" // TODO: There may be a better way to do this rather than hardcoding the path
            : "src/assets/icons/moon.svg"
        }
        hover={true}
        width={24}
        height={24}
        onClick={() =>
          setTheme(Colors[theme.id === Theme.DARK ? Theme.LIGHT : Theme.DARK])
        }
      />
      <AccountCircle src="src/assets/icons/account_placeholder.svg" />
    </Container>
  );
};

export default DesktopNavigationBar;
