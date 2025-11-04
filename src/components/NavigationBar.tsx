import SearchBar from "@components/SearchBar";
import styled from "@emotion/styled";
import * as Typography from "@libs/Typography";
import accountPlaceholderIcon from "@assets/icons/account_placeholder.svg";
import logo from "@assets/logos/logo.svg";
import { AccountCircle } from "@libs/Icons";
import { Colors } from "@libs/global";

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
const Container = styled.div`
  background-color: rgba(79, 79, 79, 0.3);
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
const NavItem = styled(Typography.NavigationLink)<{ highlighted?: boolean }>`
  cursor: pointer;
  text-wrap: nowrap;
  transition: all 0.2s;
  color: ${({ highlighted }) =>
    highlighted ? Colors.dark.navHighlight : Colors.dark.text};
  :hover {
    color: ${Colors.dark.secondary};
  }
`;
const LogoImage = styled.img`
  width: 32px;
  color: white;
`;

const DesktopNavigationBar = ({ highlighted }: { highlighted: string }) => {
  return (
    <Container>
      <NavLinksContainer>
        <NavItem>
          <LogoImage src={logo} alt="logo_img" />
        </NavItem>
        {links.map((link) => (
          <NavItem
            id={link.id}
            key={link.id}
            highlighted={link.id === highlighted}
          >
            {link.pretty}
          </NavItem>
        ))}
      </NavLinksContainer>
      <SearchBar />
      <AccountCircle
        src={accountPlaceholderIcon}
        alt="account_placeholder"
        hover={true}
      />
    </Container>
  );
};

export default DesktopNavigationBar;
